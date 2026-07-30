export const costCategories = {
  'koi': { label: 'Koi', env: 'pond', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 35, monthlyFoodPerFish: 4, gallonsPerFish: 250, minGallons: 500, pumpWattPerGallon: 0.08 },
  'goldfish-pond': { label: 'Goldfish', env: 'pond', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 8, monthlyFoodPerFish: 2, gallonsPerFish: 30, minGallons: 150, pumpWattPerGallon: 0.1 },
  'goldfish-tank': { label: 'Fancy Goldfish', env: 'indoor', isPond: false, needsHeater: false, isSaltwater: false, fishPrice: 12, monthlyFoodPerFish: 2, gallonsPerFish: 20, minGallons: 20, pumpWattPerGallon: 0.5 },
  'betta': { label: 'Betta', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 15, monthlyFoodPerFish: 1, gallonsPerFish: 5, minGallons: 5, pumpWattPerGallon: 1.0 },
  'tropical': { label: 'Tropical Community Fish', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 6, monthlyFoodPerFish: 1, gallonsPerFish: 2, minGallons: 20, pumpWattPerGallon: 0.6 },
  'cichlid': { label: 'Cichlid (African/South American)', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 15, monthlyFoodPerFish: 2, gallonsPerFish: 10, minGallons: 55, pumpWattPerGallon: 0.5 },
  'saltwater': { label: 'Saltwater / Marine Fish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 40, monthlyFoodPerFish: 3, gallonsPerFish: 15, minGallons: 30, pumpWattPerGallon: 0.7 },
}

export const environments = {
  pond: { label: 'Outdoor Pond', emoji: '🏊' },
  indoor: { label: 'Indoor Tank', emoji: '🏠' },
  saltwater: { label: 'Saltwater Tank', emoji: '🪸' },
}

const round = (n) => Math.round(n * 100) / 100

function computeGroup(entries, electricityRate) {
  const rate = electricityRate > 0 ? electricityRate : 0.16

  let fishCost = 0
  let foodCost = 0
  let gallonsNeeded = 0
  let minGallons = 0
  let needsHeater = false
  let isSaltwater = false
  let isPond = false
  let maxPumpWattPerGallon = 0
  const labels = []

  for (const { category, count } of entries) {
    const cat = costCategories[category]
    fishCost += count * cat.fishPrice
    foodCost += count * cat.monthlyFoodPerFish
    gallonsNeeded += count * cat.gallonsPerFish
    minGallons = Math.max(minGallons, cat.minGallons)
    needsHeater = needsHeater || cat.needsHeater
    isSaltwater = isSaltwater || cat.isSaltwater
    isPond = isPond || cat.isPond
    maxPumpWattPerGallon = Math.max(maxPumpWattPerGallon, cat.pumpWattPerGallon)
    labels.push(`${count} ${cat.label}`)
  }

  const gallons = Math.max(minGallons, gallonsNeeded)

  const structureCost = gallons * (isPond ? 1.0 : 2.5)
  const filterPumpCost = 30 + gallons * (isPond ? 0.3 : 0.6)
  const heaterCost = needsHeater ? 25 + gallons * 0.3 : 0
  const testKitMiscCost = 40
  const saltwaterExtraCost = isSaltwater ? 150 : 0
  const upfrontTotal = fishCost + structureCost + filterPumpCost + heaterCost + testKitMiscCost + saltwaterExtraCost

  const pumpWattage = gallons * maxPumpWattPerGallon
  const heaterWattage = needsHeater ? gallons * 3 * 0.4 : 0
  const totalWattage = pumpWattage + heaterWattage
  const electricityCost = (totalWattage * 24 * 30 / 1000) * rate
  const consumablesCost = 8
  const saltwaterMonthlyExtra = isSaltwater ? 15 : 0
  const monthlyTotal = foodCost + electricityCost + consumablesCost + saltwaterMonthlyExtra

  const annualRecurring = monthlyTotal * 12
  const emergencyFund = isPond ? 100 : isSaltwater ? 80 : 40
  const firstYearTotal = upfrontTotal + annualRecurring + emergencyFund
  const ongoingYearTotal = annualRecurring + emergencyFund

  return {
    category: labels.join(', '),
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

export function estimateCost(categoryKey, fishCount, electricityRate) {
  if (!costCategories[categoryKey] || !fishCount || fishCount < 1) return null
  return computeGroup([{ category: categoryKey, count: fishCount }], electricityRate)
}

// fishList: [{ category, count }] — entries may span multiple environments (pond/indoor/saltwater).
// Each environment present gets its own combined estimate (shared tank/pond, structure, filter, heater),
// since fish in different environments can't share one physical setup.
export function estimateMultiCost(fishList, electricityRate) {
  const valid = (fishList || []).filter(f => costCategories[f.category] && f.count > 0)
  if (valid.length === 0) return null

  const grouped = { pond: [], indoor: [], saltwater: [] }
  for (const f of valid) {
    grouped[costCategories[f.category].env].push(f)
  }

  const sections = Object.keys(environments)
    .filter(env => grouped[env].length > 0)
    .map(env => ({ env, ...environments[env], ...computeGroup(grouped[env], electricityRate) }))

  const grandTotal = {
    upfront: round(sections.reduce((s, sec) => s + sec.upfront.total, 0)),
    monthly: round(sections.reduce((s, sec) => s + sec.monthly.total, 0)),
    firstYear: round(sections.reduce((s, sec) => s + sec.annual.firstYearTotal, 0)),
    ongoingYear: round(sections.reduce((s, sec) => s + sec.annual.ongoingYearTotal, 0)),
  }

  return { sections, grandTotal }
}
