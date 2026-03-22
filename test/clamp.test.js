// clamp.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the clamp function. Verifies correct clamping of numbers within bounds.

import { describe, it, expect } from 'vitest'
import clamp from '../src/clamp.js'

describe('clamp', () => {

  it('should clamp a number below the lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
  })

  it('should clamp a number above the upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5)
  })

  it('should return the number if within bounds', () => {
    expect(clamp(3, -5, 5)).toBe(3)
  })

  it('should return lower bound when number equals lower', () => {
    expect(clamp(-5, -5, 5)).toBe(-5)
  })

  it('should return upper bound when number equals upper', () => {
    expect(clamp(5, -5, 5)).toBe(5)
  })

  it('should handle NaN bounds by defaulting to 0', () => {
    expect(clamp(5, NaN, NaN)).toBe(0)
  })
  
})