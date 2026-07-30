export function getVerdict(zone, fishType, depth) {
  if (fishType === 'tropical') {
    if (zone >= 10) {
      return {
        level: 'caution',
        title: 'Possible, but check the specific species',
        text: 'Your climate rarely if ever freezes, so some tropical fish can live outdoors year-round — but "tropical" covers a huge range of temperature needs. Most true tropicals still want water consistently above 65-75°F, so confirm your specific species\' minimum tolerance before committing, and have a backup plan for any unusual cold snap.'
      }
    }
    return {
      level: 'no',
      title: 'Not safe outdoors in winter',
      text: 'Tropical fish cannot survive freezing or near-freezing water. In your zone, they need to either live indoors year-round, or come inside before temperatures drop in autumn. Outdoor tropical setups only really work in true tropical climates (roughly zone 10 and warmer).'
    }
  }

  const d = parseFloat(depth) || 0
  const isKoi = fishType === 'koi'
  const isFancy = fishType === 'fancy-goldfish'

  // Minimum zone thresholds for safe unassisted overwintering, and the
  // depth needed to push a borderline zone into "safe" territory.
  const safeZoneNoDepthNeeded = isFancy ? 8 : isKoi ? 7 : 6
  const borderlineMinZone = isFancy ? 6 : isKoi ? 5 : 4
  const borderlineDepthNeeded = 3
  const hardMinZone = isFancy ? 5 : isKoi ? 4 : 3

  if (zone >= safeZoneNoDepthNeeded) {
    return {
      level: 'yes',
      title: 'Yes — safe to overwinter outdoors',
      text: 'Your climate is mild enough that this fish can stay outdoors year-round with a reasonably normal pond setup. Just make sure the pond is at least 2-2.5 feet deep so there\'s a stable zone fish can retreat to during any occasional cold snap.'
    }
  }

  if (zone >= borderlineMinZone) {
    if (d >= borderlineDepthNeeded) {
      return {
        level: 'yes',
        title: 'Yes — with your pond depth, this should work',
        text: 'At ' + d + ' feet deep, your pond has enough thermal mass for the bottom to stay above freezing even in a cold winter, which is what actually keeps overwintering fish alive — the surface can ice over as long as there\'s a hole for gas exchange (a floating de-icer works well) and the fish have deep water to retreat to.'
      }
    }
    return {
      level: 'caution',
      title: 'Borderline — depends on pond depth',
      text: 'Your zone is right at the edge for this fish. It can work, but you\'ll want a pond at least ' + borderlineDepthNeeded + ' feet deep so the bottom stays above freezing, plus a de-icer or aerator to maintain an opening in the ice for gas exchange. In a shallower pond, plan on bringing fish indoors for winter instead.'
    }
  }

  if (zone >= hardMinZone) {
    return {
      level: 'caution',
      title: 'Risky without real winterization',
      text: 'Your winters are cold enough that an unprepared outdoor pond is a real risk. This can still work with a pond 4+ feet deep, a reliable de-icer or pond heater, and a stable ice-free opening maintained all winter — but many keepers in this climate bring fish indoors to a heated tank instead, which is the safer option.'
    }
  }

  return {
    level: 'no',
    title: 'Not recommended outdoors year-round',
    text: 'Your winters are too severe for this fish to reliably survive outdoors without significant winterization (a heated system, indoor overwintering tank, or similar). Plan on bringing fish inside before the first hard frost, or investing in real cold-climate pond engineering before relying on outdoor overwintering.'
  }
}
