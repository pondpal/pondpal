export const costCategories = {
  'koi': { label: 'Koi (outdoor pond)', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 35, monthlyFoodPerFish: 4, gallonsPerFish: 250, minGallons: 500, pumpWattPerGallon: 0.08 },
  'goldfish-pond': { label: 'Goldfish (outdoor pond)', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 8, monthlyFoodPerFish: 2, gallonsPerFish: 30, minGallons: 150, pumpWattPerGallon: 0.1 },
  'goldfish-tank': { label: 'Fancy Goldfish (indoor tank)', isPond: false, needsHeater: false, isSaltwater: false, fishPrice: 12, monthlyFoodPerFish: 2, gallonsPerFish: 20, minGallons: 20, pumpWattPerGallon: 0.5 },
  'betta': { label: 'Betta', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 15, monthlyFoodPerFish: 1, gallonsPerFish: 5, minGallons: 5, pumpWattPerGallon: 1.0 },
  'tropical': { label: 'Tropical Community Fish', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 6, monthlyFoodPerFish: 1, gallonsPerFish: 2, minGallons: 20, pumpWattPerGallon: 0.6 },
  'cichlid': { label: 'Cichlid (African/South American)', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 15, monthlyFoodPerFish: 2, gallonsPerFish: 10, minGallons: 55, pumpWattPerGallon: 0.5 },
  'saltwater': { label: 'Saltwater / Marine Fish', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 40, monthlyFoodPerFish: 3, gallonsPerFish: 15, minGallons: 30, pumpWattPerGallon: 0.7 },
}

const round = (n) => Math.round(n * 100) / 100

export function estimateCost(categoryKey, fishCount, electricityRate) {
  const category = costCategories[categoryKey]
  if (!category || !fishCount || fishCount < 1) return null

  const rate = electricityRate > 0 ? electricityRate : 0.16
  const gallons = Math.max(category.minGallons, fishCount * category.gallonsPerFish)

  const fishCost = fishCount * category.fishPrice
  const structureCost = gallons * (category.isPond ? 1.0 : 2.5)
  const filterPumpCost = 30 + gallons * (category.isPond ? 0.3 : 0.6)
  const heaterCost = category.needsHeater ? 25 + gallons * 0.3 : 0
  const testKitMiscCost = 40
  const saltwaterExtraCost = category.isSaltwater ? 150 : 0
  const upfrontTotal = fishCost + structureCost + filterPumpCost + heaterCost + testKitMiscCost + saltwaterExtraCost

  const foodCost = fishCount * category.monthlyFoodPerFish
  const pumpWattage = gallons * category.pumpWattPerGallon
  const heaterWattage = category.needsHeater ? gallons * 3 * 0.4 : 0
  const totalWattage = pumpWattage + heaterWattage
  const electricityCost = (totalWattage * 24 * 30 / 1000) * rate
  const consumablesCost = 8
  const saltwaterMonthlyExtra = category.isSaltwater ? 15 : 0
  const monthlyTotal = foodCost + electricityCost + consumablesCost + saltwaterMonthlyExtra

  const annualRecurring = monthlyTotal * 12
  const emergencyFund = category.isPond ? 100 : category.isSaltwater ? 80 : 40
  const firstYearTotal = upfrontTotal + annualRecurring + emergencyFund
  const ongoingYearTotal = annualRecurring + emergencyFund

  return {
    category: category.label,
    recommendedGallons: Math.round(gallons),
    upfront: {
      fish: round(fishCost),
      structure: round(structureCost),
      filterPump: round(filterPumpCost),
      heater: round(heaterCost),
      testKitMisc: testKitMiscCost,
      saltwaterExtra: saltwaterExtraCost,
      total: round(upfrontTotal),
    },
    monthly: {
      food: round(foodCost),
      electricity: round(electricityCost),
      consumables: consumablesCost,
      saltwaterExtra: saltwaterMonthlyExtra,
      total: round(monthlyTotal),
    },
    annual: {
      recurring: round(annualRecurring),
      emergencyFund,
      firstYearTotal: round(firstYearTotal),
      ongoingYearTotal: round(ongoingYearTotal),
    },
  }
}
