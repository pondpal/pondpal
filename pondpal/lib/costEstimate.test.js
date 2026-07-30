import { estimateCost, estimateSetupsCost } from './costEstimate'

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

describe('estimateSetupsCost', () => {
  test('returns null for an empty or entirely invalid setup list', () => {
    expect(estimateSetupsCost([], 0.16)).toBeNull()
    expect(estimateSetupsCost(null, 0.16)).toBeNull()
    expect(estimateSetupsCost([{ env: 'pond', fish: [{ category: 'not-real', count: 3 }] }], 0.16)).toBeNull()
    expect(estimateSetupsCost([{ env: 'pond', fish: [{ category: 'koi', count: 0 }] }], 0.16)).toBeNull()
    expect(estimateSetupsCost([{ env: 'not-an-env', fish: [{ category: 'koi', count: 2 }] }], 0.16)).toBeNull()
  })

  test('combines multiple fish types within a single setup', () => {
    const result = estimateSetupsCost([
      { env: 'pond', fish: [{ category: 'koi', count: 2 }, { category: 'goldfish-pond', count: 2 }] },
    ], 0.16)
    expect(result.sections).toHaveLength(1)
    expect(result.sections[0].env).toBe('pond')
    // 2*250 + 2*30 = 560, above the 500 gallon koi floor
    expect(result.sections[0].recommendedGallons).toBe(560)
  })

  test('keeps two setups of the same environment as separate sections', () => {
    const result = estimateSetupsCost([
      { env: 'indoor', fish: [{ category: 'betta', count: 1 }] },
      { env: 'indoor', fish: [{ category: 'tropical', count: 6 }] },
    ], 0.16)
    expect(result.sections).toHaveLength(2)
    expect(result.sections.every(s => s.env === 'indoor')).toBe(true)
    expect(result.sections[0].label).toBe('Indoor Tank #1')
    expect(result.sections[1].label).toBe('Indoor Tank #2')
    // each setup's own gallons, not combined
    expect(result.sections[0].recommendedGallons).toBe(5)
    expect(result.sections[1].recommendedGallons).toBe(20)
  })

  test('does not number a section when only one setup of that environment exists', () => {
    const result = estimateSetupsCost([
      { env: 'pond', fish: [{ category: 'koi', count: 2 }] },
      { env: 'saltwater', fish: [{ category: 'saltwater', count: 3 }] },
    ], 0.16)
    expect(result.sections.map(s => s.label)).toEqual(['Outdoor Pond', 'Saltwater Tank'])
  })

  test('grand total equals the sum of each section total', () => {
    const result = estimateSetupsCost([
      { env: 'pond', fish: [{ category: 'koi', count: 2 }] },
      { env: 'indoor', fish: [{ category: 'tropical', count: 6 }] },
    ], 0.16)
    const expectedUpfront = result.sections.reduce((s, sec) => s + sec.upfront.total, 0)
    const expectedMonthly = result.sections.reduce((s, sec) => s + sec.monthly.total, 0)
    expect(result.grandTotal.upfront).toBeCloseTo(expectedUpfront, 2)
    expect(result.grandTotal.monthly).toBeCloseTo(expectedMonthly, 2)
  })

  test('ignores invalid fish entries mixed in with valid ones', () => {
    const result = estimateSetupsCost([
      { env: 'pond', fish: [{ category: 'koi', count: 2 }, { category: 'not-real', count: 5 }, { category: 'betta', count: 0 }] },
    ], 0.16)
    expect(result.sections).toHaveLength(1)
    expect(result.sections[0].env).toBe('pond')
  })

  test('drops a setup entirely if it ends up with no valid fish', () => {
    const result = estimateSetupsCost([
      { env: 'pond', fish: [{ category: 'koi', count: 2 }] },
      { env: 'indoor', fish: [{ category: 'not-real', count: 5 }] },
    ], 0.16)
    expect(result.sections).toHaveLength(1)
    expect(result.sections[0].env).toBe('pond')
  })
})
