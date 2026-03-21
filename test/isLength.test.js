// isLength.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isLength function. Verifies correct identification of valid array-like lengths.

import { describe, it, expect } from 'vitest'
import isLength from '../src/isLength.js'

describe('isLength', () => {

  it('should return true for a valid length', () => {
    expect(isLength(3)).toBe(true)
  })

  it('should return true for zero', () => {
    expect(isLength(0)).toBe(true)
  })

  it('should return true for MAX_SAFE_INTEGER', () => {
    expect(isLength(9007199254740991)).toBe(true)
  })

  it('should return false for Number.MIN_VALUE', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false)
  })

  it('should return false for Infinity', () => {
    expect(isLength(Infinity)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isLength('3')).toBe(false)
  })

  it('should return false for negative numbers', () => {
    expect(isLength(-1)).toBe(false)
  })

  it('should return false for floats', () => {
    expect(isLength(1.5)).toBe(false)
  })

  it('should return false for values exceeding MAX_SAFE_INTEGER', () => {
    expect(isLength(9007199254740992)).toBe(false)
  })
  
})