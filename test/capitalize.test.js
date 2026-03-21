// capitalize.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the capitalize function. Verifies correct capitalization of strings.

import { describe, it, expect } from 'vitest'
import capitalize from '../src/capitalize.js'

describe('capitalize', () => {

  it('should capitalize the first character and lowercase the rest', () => {
    expect(capitalize('FRED')).toBe('Fred')
  })

  it('should capitalize a fully lowercase string', () => {
    expect(capitalize('fred')).toBe('Fred')
  })

  it('should handle a single character', () => {
    expect(capitalize('f')).toBe('F')
  })

  it('should return empty string for empty input', () => {
    expect(capitalize('')).toBe('')
  })

  it('should handle mixed case', () => {
    expect(capitalize('fReD')).toBe('Fred')
  })
  
})