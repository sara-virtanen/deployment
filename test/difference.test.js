// difference.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the difference function. Verifies correct array difference computation.

import { describe, it, expect } from 'vitest'
import difference from '../src/difference.js'

describe('difference', () => {

  it('should return values from first array not in second', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
  })

  it('should return all values if no matches', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3])
  })

  it('should return empty array if all values match', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([])
  })

  it('should handle multiple exclusion arrays', () => {
    expect(difference([1, 2, 3, 4], [1, 2], [3])).toEqual([4])
  })

  it('should return empty array for non array-like input', () => {
    expect(difference(null, [1, 2])).toEqual([])
  })

  it('should handle empty input array', () => {
    expect(difference([], [1, 2, 3])).toEqual([])
  })

  it('should handle no exclusion arrays', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3])
  })
  
})