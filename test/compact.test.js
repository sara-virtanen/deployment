// compact.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the compact function. Verifies correct removal of falsey values.

import { describe, it, expect } from 'vitest'
import compact from '../src/compact.js'

describe('compact', () => {

  it('should remove all falsey values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
  })

  it('should return empty array for all falsey values', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([])
  })

  it('should return same array if no falsey values', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('should handle empty array', () => {
    expect(compact([])).toEqual([])
  })

  it('should keep truthy strings', () => {
    expect(compact(['hello', '', 'world'])).toEqual(['hello', 'world'])
  })
  
})