// divide.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the divide function. Verifies correct division of two numbers.

import { describe, it, expect } from 'vitest'
import divide from '../src/divide.js'

describe('divide', () => {

  it('should divide two numbers', () => {
    expect(divide(6, 4)).toBe(1.5)
  })

  it('should handle division by 1', () => {
    expect(divide(6, 1)).toBe(6)
  })

  it('should handle dividing 0', () => {
    expect(divide(0, 4)).toBe(0)
  })

  it('should handle negative numbers', () => {
    expect(divide(-6, 4)).toBe(-1.5)
  })
  
})