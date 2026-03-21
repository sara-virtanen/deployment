// toFinite.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the toFinite function. Verifies correct conversion of values to finite numbers.

import { describe, it, expect } from 'vitest'
import toFinite from '../src/toFinite.js'

describe('toFinite', () => {

  it('should return the same finite number', () => {
    expect(toFinite(3.2)).toBe(3.2)
  })

  it('should handle Number.MIN_VALUE', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324)
  })

  it('should convert Infinity to MAX_INTEGER', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308)
  })

  it('should convert -Infinity to -MAX_INTEGER', () => {
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308)
  })

  it('should convert numeric string to finite number', () => {
    expect(toFinite('3.2')).toBe(3.2)
  })

  it('should return 0 for null', () => {
    expect(toFinite(null)).toBe(0)
  })

  it('should return 0 for undefined', () => {
    expect(toFinite(undefined)).toBe(0)
  })

  it('should return 0 for NaN', () => {
    expect(toFinite(NaN)).toBe(0)
  })

  it('should return 0 for empty string', () => {
    expect(toFinite('')).toBe(0)
  })

  it('should handle zero', () => {
    expect(toFinite(0)).toBe(0)
  })

})