// isSymbol.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isSymbol function. Verifies that the function correctly identifies symbols.

import { describe, it, expect } from 'vitest'
import isSymbol from '../src/isSymbol.js'

describe('isSymbol', () => {

  it('should return true for a Symbol primitive', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })

  it('should return true for a Symbol created with Symbol()', () => {
    expect(isSymbol(Symbol('abc'))).toBe(true)
  })

  it('should return true for a Symbol object wrapper', () => {
    expect(isSymbol(Object(Symbol('abc')))).toBe(true)
  })

  it('should return false for strings', () => {
    expect(isSymbol('abc')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isSymbol(42)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isSymbol(null)).toBe(false)
  })

  it('should return false for plain objects', () => {
    expect(isSymbol({})).toBe(false)
  })

})