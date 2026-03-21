// isArrayLike.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isArrayLike function. Verifies correct identification of array-like values.

import { describe, it, expect } from 'vitest'
import isArrayLike from '../src/isArrayLike.js'

describe('isArrayLike', () => {
  it('should return true for arrays', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true)
  })

  it('should return true for strings', () => {
    expect(isArrayLike('abc')).toBe(true)
  })

  it('should return true for objects with a valid length property', () => {
    expect(isArrayLike({ length: 3 })).toBe(true)
  })

  it('should return false for functions', () => {
    expect(isArrayLike(Function)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isArrayLike(null)).toBe(false)
  })

  it('should return false for plain objects without length', () => {
    expect(isArrayLike({})).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isArrayLike(42)).toBe(false)
  })
  
})