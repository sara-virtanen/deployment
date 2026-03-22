// endsWith.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the endsWith function. Verifies correct end-of-string detection.

import { describe, it, expect } from 'vitest'
import endsWith from '../src/endsWith.js'

describe('endsWith', () => {

  it('should return true when string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true)
  })

  it('should return false when string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false)
  })

  it('should return true when string ends with target up to position', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
  })

  it('should return false for empty target at position 0', () => {
    expect(endsWith('abc', 'a', 0)).toBe(false)
  })

  it('should handle position greater than string length', () => {
    expect(endsWith('abc', 'c', 10)).toBe(true)
  })

  it('should handle negative position', () => {
    expect(endsWith('abc', 'a', -1)).toBe(false)
  })

  it('should return true for empty target', () => {
    expect(endsWith('abc', '')).toBe(true)
  })

  it('should return false for target longer than string', () => {
    expect(endsWith('abc', 'abcd')).toBe(false)
  })
  
})