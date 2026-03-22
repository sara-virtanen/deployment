// countBy.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the countBy function. Verifies correct counting of collection elements by iteratee.

import { describe, it, expect } from 'vitest'
import countBy from '../src/countBy.js'

describe('countBy', () => {

  it('should count elements by iteratee result', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 })
  })

  it('should count string lengths', () => {
    expect(countBy(['one', 'two', 'three'], value => value.length)).toEqual({ '3': 2, '5': 1 })
  })

  it('should return empty object for empty array', () => {
    expect(countBy([], value => value)).toEqual({})
  })

  it('should handle single element', () => {
    expect(countBy([1], value => value)).toEqual({ '1': 1 })
  })
  
})