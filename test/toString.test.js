// toString.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the toString function. Verifies correct conversion of values to strings.

import { describe, it, expect } from 'vitest'
import toString from '../src/toString.js'

describe('toString', () => {

  it('should return empty string for null', () => {
    expect(toString(null)).toBe('')
  })

  it('should return empty string for undefined', () => {
    expect(toString(undefined)).toBe('')
  })

  it('should preserve -0 as string', () => {
    expect(toString(-0)).toBe('-0')
  })

  it('should convert array to string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })

  it('should return the same string for string input', () => {
    expect(toString('hello')).toBe('hello')
  })

  it('should convert numbers to string', () => {
    expect(toString(42)).toBe('42')
  })

  it('should convert Symbol to string', () => {
    expect(toString(Symbol('abc'))).toBe('Symbol(abc)')
  })

  it('should handle array with null values', () => {
    expect(toString([1, null, 3])).toBe('1,,3')
  })
  
})