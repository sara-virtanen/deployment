// isArrayLikeObject.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isArrayLikeObject function. Verifies correct identification of array-like objects.

import { describe, it, expect } from 'vitest'
import isArrayLikeObject from '../src/isArrayLikeObject.js'

describe('isArrayLikeObject', () => {

  it('should return true for arrays', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true)
  })

  it('should return true for objects with a valid length property', () => {
    expect(isArrayLikeObject({ length: 3 })).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isArrayLikeObject('abc')).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isArrayLikeObject(Function)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isArrayLikeObject(null)).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isArrayLikeObject(42)).toBe(false)
  })

  it('should return false for plain objects without length', () => {
    expect(isArrayLikeObject({})).toBe(false)
  })
  
})