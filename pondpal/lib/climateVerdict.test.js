import { getVerdict } from './climateVerdict'

describe('getVerdict', () => {
  describe('tropical fish', () => {
    test('warm zone (10+) is possible with caution', () => {
      expect(getVerdict(10, 'tropical', '').level).toBe('caution')
      expect(getVerdict(11, 'tropical', '').level).toBe('caution')
    })

    test('below zone 10 is not safe, regardless of depth', () => {
      expect(getVerdict(9, 'tropical', '10').level).toBe('no')
      expect(getVerdict(3, 'tropical', '').level).toBe('no')
    })
  })

  describe('koi', () => {
    test('zone 7+ is safe with no depth needed', () => {
      expect(getVerdict(7, 'koi', '').level).toBe('yes')
      expect(getVerdict(9, 'koi', '').level).toBe('yes')
    })

    test('borderline zones (5-6) are safe with 3+ feet of depth', () => {
      expect(getVerdict(6, 'koi', '3').level).toBe('yes')
      expect(getVerdict(5, 'koi', '4').level).toBe('yes')
    })

    test('borderline zones (5-6) are caution without enough depth', () => {
      expect(getVerdict(6, 'koi', '2').level).toBe('caution')
      expect(getVerdict(5, 'koi', '').level).toBe('caution')
    })

    test('zone 4 is caution regardless (risky category)', () => {
      expect(getVerdict(4, 'koi', '5').level).toBe('caution')
    })

    test('below zone 4 is not recommended', () => {
      expect(getVerdict(3, 'koi', '10').level).toBe('no')
    })
  })

  describe('fancy goldfish (least cold-hardy)', () => {
    test('needs a warmer zone than koi to be safe with no depth', () => {
      expect(getVerdict(7, 'fancy-goldfish', '').level).toBe('caution')
      expect(getVerdict(8, 'fancy-goldfish', '').level).toBe('yes')
    })

    test('is not recommended at a zone where koi would only be "caution"', () => {
      expect(getVerdict(4, 'fancy-goldfish', '10').level).toBe('no')
      expect(getVerdict(4, 'koi', '10').level).toBe('caution')
    })
  })

  describe('common goldfish (most cold-hardy)', () => {
    test('is safe with no depth needed at a zone where koi still needs depth', () => {
      expect(getVerdict(6, 'common-goldfish', '').level).toBe('yes')
      expect(getVerdict(6, 'koi', '').level).toBe('caution')
    })
  })
})
