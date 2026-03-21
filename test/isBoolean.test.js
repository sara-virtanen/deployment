// isBoolean.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isBoolean function. Verifies correct identification of boolean values.

import { describe, it, expect } from 'vitest'
import isBoolean from '../src/isBoolean.js'

describe('isBoolean', () => {

  it('should return true for false', () => {
    expect(isBoolean(false)).toBe(true)
  })

  it('should return true for true', () => {
    expect(isBoolean(true)).toBe(true)
  })

  it('should return true for a Boolean object', () => {
    expect(isBoolean(new Boolean(false))).toBe(true)
  })

  it('should return false for null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isBoolean(0)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isBoolean('true')).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false)
  })
  
})