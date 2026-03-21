// words.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the words function. Verifies correct splitting of strings into words.

import { describe, it, expect } from 'vitest'
import words from '../src/words.js'

describe('words', () => {

  it('should split a simple sentence into words', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
  })

  it('should use a custom pattern when provided', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
  })

  it('should return empty array for empty string', () => {
    expect(words('')).toEqual([])
  })

  it('should handle camelCase words', () => {
    expect(words('camelCase')).toEqual(['camel', 'Case'])
  })

  it('should handle strings with numbers', () => {
    expect(words('test123')).toEqual(['test', '123'])
  })

  it('should return empty array when no words match pattern', () => {
    expect(words('123', /[a-z]+/g)).toEqual([])
  })
  
})