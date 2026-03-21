// drop.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the drop function. Verifies correct dropping of elements from arrays.

import { describe, it, expect } from 'vitest'
import drop from '../src/drop.js'

describe('drop', () => {

  it('should drop one element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3])
  })

  it('should drop n elements from the beginning', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3])
  })

  it('should return empty array when n exceeds length', () => {
    expect(drop([1, 2, 3], 5)).toEqual([])
  })

  it('should return full array when n is 0', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
  })

  it('should return empty array for null input', () => {
    expect(drop(null)).toEqual([])
  })

  it('should handle negative n by treating it as 0', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3])
  })

  it('should return empty array for empty input', () => {
    expect(drop([])).toEqual([])
  })
  
})