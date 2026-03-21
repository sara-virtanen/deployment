// camelCase.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the camelCase function. Verifies correct camelCase conversion.

import { describe, it, expect } from 'vitest'
import camelCase from '../src/camelCase.js'

describe('camelCase', () => {

  it('should convert space separated string to camelCase', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
  })

  it('should convert hyphenated string to camelCase', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar')
  })

  it('should convert underscore separated string to camelCase', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })

  it('should return empty string for empty input', () => {
    expect(camelCase('')).toBe('')
  })

  it('should handle single word', () => {
    expect(camelCase('foo')).toBe('foo')
  })
  
})