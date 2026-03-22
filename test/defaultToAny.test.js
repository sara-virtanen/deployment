// defaultToAny.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the defaultToAny function. Verifies correct behaviour with multiple default values.

import { describe, it, expect } from 'vitest'
import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny', () => {

  it('should return value when it is not null, undefined or NaN', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1)
  })

  it('should return first valid default when value is undefined', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10)
  })

  it('should skip null defaults and return first valid one', () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20)
  })

  it('should return NaN when all values are null, undefined or NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBeNaN()
  })

  it('should return value when value is 0', () => {
    expect(defaultToAny(0, 10, 20)).toBe(0)
  })

  it('should skip NaN defaults due to defaultTo bug', () => {
    expect(defaultToAny(undefined, NaN, 20)).toBe(20)
  })
  
})