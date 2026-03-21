// toNumber.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the toNumber function. Verifies correct conversion of various value types to numbers.

import { describe, it, expect } from 'vitest'
import toNumber from '../src/toNumber.js'

describe('toNumber', () => {

  it('should return the same number for number input', () => {
    expect(toNumber(3.2)).toBe(3.2)
  })

  it('should handle Number.MIN_VALUE', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
  })

  it('should handle Infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
  })

  it('should convert a numeric string to a number', () => {
    expect(toNumber('3.2')).toBe(3.2)
  })

  it('should return NaN for Symbol values', () => {
    expect(toNumber(Symbol('abc'))).toBeNaN()
  })

  it('should convert binary string to number', () => {
    expect(toNumber('0b101')).toBe(5)
  })

  it('should convert octal string to number', () => {
    expect(toNumber('0o7')).toBe(7)
  })

  it('should return NaN for bad hexadecimal strings', () => {
    expect(toNumber('-0x1')).toBeNaN()
  })

  it('should handle string with whitespace', () => {
    expect(toNumber('  3.2  ')).toBe(3.2)
  })

  it('should handle zero', () => {
    expect(toNumber(0)).toBe(0)
  })

  it('should convert object with valueOf to number', () => {
    expect(toNumber({ valueOf: () => 42 })).toBe(42)
  })
  
})