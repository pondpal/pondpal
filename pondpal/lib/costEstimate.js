export const costCategories = {
  'koi': { label: 'Koi', env: 'pond', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 35, monthlyFoodPerFish: 4, gallonsPerFish: 250, minGallons: 500, pumpWattPerGallon: 0.08 },
  'goldfish-pond': { label: 'Goldfish — Fancy', env: 'pond', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 8, monthlyFoodPerFish: 2, gallonsPerFish: 30, minGallons: 150, pumpWattPerGallon: 0.1 },
  'common-goldfish': { label: 'Goldfish — Common / Comet', env: 'pond', isPond: true, needsHeater: false, isSaltwater: false, fishPrice: 5, monthlyFoodPerFish: 2, gallonsPerFish: 40, minGallons: 150, pumpWattPerGallon: 0.1 },
  'goldfish-tank': { label: 'Fancy Goldfish (indoor tank)', env: 'indoor', isPond: false, needsHeater: false, isSaltwater: false, fishPrice: 12, monthlyFoodPerFish: 2, gallonsPerFish: 20, minGallons: 20, pumpWattPerGallon: 0.5 },
  'betta': { label: 'Betta Fish', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 15, monthlyFoodPerFish: 1, gallonsPerFish: 5, minGallons: 5, pumpWattPerGallon: 1.0 },
  'african-cichlid': { label: 'Cichlid — African (Malawi/Tanganyika)', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 12, monthlyFoodPerFish: 2, gallonsPerFish: 8, minGallons: 55, pumpWattPerGallon: 0.5 },
  'south-american-cichlid': { label: 'Cichlid — South American', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 10, monthlyFoodPerFish: 2, gallonsPerFish: 12, minGallons: 55, pumpWattPerGallon: 0.5 },
  'oscar': { label: 'Oscar', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 12, monthlyFoodPerFish: 3, gallonsPerFish: 55, minGallons: 55, pumpWattPerGallon: 0.4 },
  'tropical': { label: 'Tropical Community Fish', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 6, monthlyFoodPerFish: 1, gallonsPerFish: 2, minGallons: 20, pumpWattPerGallon: 0.6 },
  'guppies': { label: 'Guppies / Livebearers', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 4, monthlyFoodPerFish: 0.5, gallonsPerFish: 1, minGallons: 10, pumpWattPerGallon: 0.6 },
  'tetras': { label: 'Tetras', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 4, monthlyFoodPerFish: 0.5, gallonsPerFish: 1, minGallons: 10, pumpWattPerGallon: 0.6 },
  'angelfish': { label: 'Angelfish', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 8, monthlyFoodPerFish: 1, gallonsPerFish: 8, minGallons: 29, pumpWattPerGallon: 0.5 },
  'discus': { label: 'Discus', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 35, monthlyFoodPerFish: 2, gallonsPerFish: 15, minGallons: 55, pumpWattPerGallon: 0.5 },
  'corydoras': { label: 'Corydoras / Bottom Dwellers', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 5, monthlyFoodPerFish: 0.5, gallonsPerFish: 2, minGallons: 10, pumpWattPerGallon: 0.5 },
  'pleco': { label: 'Pleco / Suckermouth Fish', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 8, monthlyFoodPerFish: 1, gallonsPerFish: 20, minGallons: 30, pumpWattPerGallon: 0.5 },
  'other-freshwater': { label: 'Other Freshwater Fish', env: 'indoor', isPond: false, needsHeater: true, isSaltwater: false, fishPrice: 8, monthlyFoodPerFish: 1, gallonsPerFish: 5, minGallons: 20, pumpWattPerGallon: 0.5 },
  'clownfish': { label: 'Clownfish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 30, monthlyFoodPerFish: 2, gallonsPerFish: 20, minGallons: 30, pumpWattPerGallon: 0.6 },
  'chromis': { label: 'Chromis / Damselfish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 15, monthlyFoodPerFish: 1.5, gallonsPerFish: 10, minGallons: 30, pumpWattPerGallon: 0.6 },
  'tang': { label: 'Tang / Surgeonfish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 60, monthlyFoodPerFish: 3, gallonsPerFish: 75, minGallons: 75, pumpWattPerGallon: 0.7 },
  'marine-angelfish': { label: 'Marine Angelfish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 70, monthlyFoodPerFish: 3, gallonsPerFish: 50, minGallons: 55, pumpWattPerGallon: 0.7 },
  'blenny': { label: 'Blenny / Goby', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 25, monthlyFoodPerFish: 1.5, gallonsPerFish: 15, minGallons: 30, pumpWattPerGallon: 0.6 },
  'wrasse': { label: 'Wrasse', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 45, monthlyFoodPerFish: 2, gallonsPerFish: 30, minGallons: 30, pumpWattPerGallon: 0.6 },
  'lionfish': { label: 'Lionfish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 50, monthlyFoodPerFish: 4, gallonsPerFish: 50, minGallons: 55, pumpWattPerGallon: 0.6 },
  'reef-mixed': { label: 'Mixed Reef Tank', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 45, monthlyFoodPerFish: 3, gallonsPerFish: 20, minGallons: 55, pumpWattPerGallon: 0.8 },
  'saltwater': { label: 'Other Saltwater Fish', env: 'saltwater', isPond: false, needsHeater: true, isSaltwater: true, fishPrice: 40, monthlyFoodPerFish: 3, gallonsPerFish: 15, minGallons: 30, pumpWattPerGallon: 0.7 },
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

// setups: [{ env, fish: [{ category, count }] }] — each setup is a distinct physical
// tank or pond (its own structure/filter/heater), so two setups can share the same
// environment (e.g. two separate indoor tanks) without being merged into one.
export function estimateSetupsCost(setups, electricityRate) {
  const validSetups = (setups || [])
    .map(s => ({ env: s.env, fish: (s.fish || []).filter(f => costCategories[f.category] && f.count > 0) }))
    .filter(s => environments[s.env] && s.fish.length > 0)

  if (validSetups.length === 0) return null

  const envTotalCounts = {}
  validSetups.forEach(s => { envTotalCounts[s.env] = (envTotalCounts[s.env] || 0) + 1 })

  const envRunningCounts = {}
  const sections = validSetups.map(s => {
    envRunningCounts[s.env] = (envRunningCounts[s.env] || 0) + 1
    const meta = environments[s.env]
    const label = envTotalCounts[s.env] > 1 ? `${meta.label} #${envRunningCounts[s.env]}` : meta.label
    return { env: s.env, emoji: meta.emoji, label, ...computeGroup(s.fish, electricityRate) }
  })

  const grandTotal = {
    upfront: round(sections.reduce((s, sec) => s + sec.upfront.total, 0)),
    monthly: round(sections.reduce((s, sec) => s + sec.monthly.total, 0)),
    firstYear: round(sections.reduce((s, sec) => s + sec.annual.firstYearTotal, 0)),
    ongoingYear: round(sections.reduce((s, sec) => s + sec.annual.ongoingYearTotal, 0)),
  }

  return { sections, grandTotal }
}
