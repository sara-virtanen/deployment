// filter.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the filter function. Verifies correct filtering of array elements.

import { describe, it, expect } from 'vitest'
import filter from '../src/filter.js'

describe('filter', () => {
  
  it('should return elements that pass the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ]
    expect(filter(users, ({ active }) => active)).toEqual([{ user: 'barney', active: true }])
  })

  it('should return empty array when no elements pass', () => {
    expect(filter([1, 2, 3], (n) => n > 5)).toEqual([])
  })

  it('should return all elements when all pass', () => {
    expect(filter([1, 2, 3], (n) => n > 0)).toEqual([1, 2, 3])
  })

  it('should return empty array for null input', () => {
    expect(filter(null, (n) => n)).toEqual([])
  })

  it('should filter numbers correctly', () => {
    expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4])
  })

})