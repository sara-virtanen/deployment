// toInteger.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the toInteger function. Verifies correct conversion of values to integers.

import { describe, it, expect } from 'vitest'
import toInteger from '../src/toInteger.js'

describe('toInteger', () => {

  it('should truncate a float to an integer', () => {
    expect(toInteger(3.2)).toBe(3)
  })

  it('should truncate a negative float to an integer', () => {
    expect(toInteger(-3.9)).toBe(-3)
  })

  it('should return 0 for Number.MIN_VALUE', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0)
  })

  it('should convert Infinity to MAX_INTEGER', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308)
  })

  it('should convert a numeric string to an integer', () => {
    expect(toInteger('3.2')).toBe(3)
  })

  it('should return 0 for null', () => {
    expect(toInteger(null)).toBe(0)
  })

  it('should return 0 for empty string', () => {
    expect(toInteger('')).toBe(0)
  })

  it('should handle zero', () => {
    expect(toInteger(0)).toBe(0)
  })
  
})