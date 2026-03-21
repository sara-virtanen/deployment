// isDate.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the isDate function. Verifies correct identification of Date objects.

import { describe, it, expect } from 'vitest'
import isDate from '../src/isDate.js'

describe('isDate', () => {

  it('should return true for a Date object', () => {
    expect(isDate(new Date)).toBe(true)
  })

  it('should return true for a Date object with a specific date', () => {
    expect(isDate(new Date(2012, 3, 23))).toBe(true)
  })

  it('should return false for a date string', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
  })

  it('should return false for null', () => {
    expect(isDate(null)).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isDate(42)).toBe(false)
  })

  it('should return false for a plain object', () => {
    expect(isDate({})).toBe(false)
  })
  
})