// upperFirst.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the upperFirst function. Verifies correct conversion of first character to uppercase.

import { describe, it, expect } from 'vitest'
import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {

  it('should capitalize the first character of a lowercase string', () => {
    expect(upperFirst('fred')).toBe('Fred')
  })

  it('should leave an already uppercase string unchanged', () => {
    expect(upperFirst('FRED')).toBe('FRED')
  })

  it('should handle a single character', () => {
    expect(upperFirst('f')).toBe('F')
  })

  it('should return empty string for empty input', () => {
    expect(upperFirst('')).toBe('')
  })

  it('should only capitalize the first character', () => {
    expect(upperFirst('hello world')).toBe('Hello world')
  })
  
})