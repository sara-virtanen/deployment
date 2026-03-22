// defaultTo.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the defaultTo function. Verifies correct default value behaviour.

import { describe, it, expect } from 'vitest'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo', () => {

  it('should return value when it is not null, undefined or NaN', () => {
    expect(defaultTo(1, 10)).toBe(1)
  })

  it('should return defaultValue when value is null', () => {
    expect(defaultTo(null, 10)).toBe(10)
  })

  it('should return defaultValue when value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10)
  })

  it('should return defaultValue when value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10)
  })

  it('should return 0 when value is 0', () => {
    expect(defaultTo(0, 10)).toBe(0)
  })

  it('should return false when value is false', () => {
    expect(defaultTo(false, true)).toBe(false)
  })
  
})