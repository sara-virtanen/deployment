// isObject.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isObject function. Verifies that the function correctly identifies objects.

import { describe, it, expect } from 'vitest'
import isObject from '../src/isObject.js'

describe('isObject', () => {

  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true)
  })

  it('should return true for arrays', () => {
    expect(isObject([1, 2, 3])).toBe(true)
  })

  it('should return true for functions', () => {
    expect(isObject(Function)).toBe(true)
  })

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isObject('hello')).toBe(false)
  })
  
  it('should return false for numbers', () => {
    expect(isObject(42)).toBe(false)
  })
})