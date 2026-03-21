// isEmpty.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isEmpty function. Verifies correct identification of empty values.

import { describe, it, expect } from 'vitest'
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {

  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  it('should return true for a boolean', () => {
    expect(isEmpty(true)).toBe(true)
  })

  it('should return true for a number', () => {
    expect(isEmpty(1)).toBe(true)
  })

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true)
  })

  it('should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true)
  })

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('should return false for a non-empty string', () => {
    expect(isEmpty('abc')).toBe(false)
  })

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('should return false for a non-empty Map', () => {
    expect(isEmpty(new Map([['a', 1]]))).toBe(false)
  })

  it('should return false for a non-empty Set', () => {
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false)
  })

  it('should return true for an arguments object with no arguments', () => {
    expect(isEmpty(function() { return arguments }())).toBe(true)
  })
  
})