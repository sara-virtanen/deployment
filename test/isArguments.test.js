// isArguments.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isArguments function. Verifies correct identification of arguments objects.

import { describe, it, expect } from 'vitest'
import isArguments from '../src/isArguments.js'

describe('isArguments', () => {

  it('should return true for an arguments object', () => {
    expect(isArguments(function() { return arguments }())).toBe(true)
  })

  it('should return false for arrays', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })

  it('should return false for plain objects', () => {
    expect(isArguments({})).toBe(false)
  })

  it('should return false for null', () => {
    expect(isArguments(null)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isArguments('abc')).toBe(false)
  })
  
})