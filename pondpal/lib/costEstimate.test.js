import { estimateCost } from './costEstimate'

describe('estimateCost', () => {
  test('returns null for an unknown category or missing fish count', () => {
    expect(estimateCost('not-a-real-category', 5, 0.16)).toBeNull()
    expect(estimateCost('koi', 0, 0.16)).toBeNull()
    expect(estimateCost('koi', null, 0.16)).toBeNull()
  })

  test('applies the minimum gallons floor for a small fish count', () => {
    const result = estimateCost('koi', 1, 0.16)
    // 1 koi * 250 gal/fish = 250, but koi has a 500 gallon floor
    expect(result.recommendedGallons).toBe(500)
  })

  test('scales recommended gallons with fish count once above the floor', () => {
    const result = estimateCost('koi', 4, 0.16)
    expect(result.recommendedGallons).toBe(1000)
  })

  test('upfront cost includes fish, structure, filter/pump, and misc, but no heater for koi', () => {
    const result = estimateCost('koi', 2, 0.16)
    expect(result.upfront.heater).toBe(0)
    expect(result.upfront.saltwaterExtra).toBe(0)
    expect(result.upfront.fish).toBe(70) // 2 * 35
    expect(result.upfront.total).toBeGreaterThan(result.upfront.fish)
  })

  test('tropical and other heated categories include a nonzero heater cost', () => {
    const result = estimateCost('tropical', 6, 0.16)
    expect(result.upfront.heater).toBeGreaterThan(0)
  })

  test('saltwater includes the marine equipment premium upfront and monthly extra', () => {
    const result = estimateCost('saltwater', 3, 0.16)
    expect(result.upfront.saltwaterExtra).toBe(150)
    expect(result.monthly.saltwaterExtra).toBe(15)
  })

  test('freshwater non-saltwater categories have no saltwater extras', () => {
    const result = estimateCost('betta', 1, 0.16)
    expect(result.upfront.saltwaterExtra).toBe(0)
    expect(result.monthly.saltwaterExtra).toBe(0)
  })

  test('electricity cost responds to the provided rate', () => {
    const cheap = estimateCost('koi', 4, 0.10)
    const expensive = estimateCost('koi', 4, 0.30)
    expect(expensive.monthly.electricity).toBeGreaterThan(cheap.monthly.electricity)
  })

  test('falls back to a default electricity rate when none or zero is given', () => {
    const withDefault = estimateCost('koi', 4, 0)
    const explicit = estimateCost('koi', 4, 0.16)
    expect(withDefault.monthly.electricity).toBe(explicit.monthly.electricity)
  })

  test('annual totals are internally consistent with monthly and upfront figures', () => {
    const result = estimateCost('tropical', 6, 0.16)
    expect(result.annual.recurring).toBeCloseTo(result.monthly.total * 12, 0)
    expect(result.annual.firstYearTotal).toBeCloseTo(
      result.upfront.total + result.annual.recurring + result.annual.emergencyFund, 1
    )
    expect(result.annual.ongoingYearTotal).toBeCloseTo(
      result.annual.recurring + result.annual.emergencyFund, 1
    )
  })

  test('more fish means a higher food and total monthly cost', () => {
    const few = estimateCost('tropical', 5, 0.16)
    const many = estimateCost('tropical', 20, 0.16)
    expect(many.monthly.food).toBeGreaterThan(few.monthly.food)
    expect(many.monthly.total).toBeGreaterThan(few.monthly.total)
  })
})
