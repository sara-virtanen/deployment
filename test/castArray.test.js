// castArray.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the castArray function. Verifies correct casting of values to arrays.

import { describe, it, expect } from 'vitest'
import castArray from '../src/castArray.js'

describe('castArray', () => {

  it('should wrap a number in an array', () => {
    expect(castArray(1)).toEqual([1])
  })

  it('should wrap an object in an array', () => {
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }])
  })

  it('should wrap a string in an array', () => {
    expect(castArray('abc')).toEqual(['abc'])
  })

  it('should wrap null in an array', () => {
    expect(castArray(null)).toEqual([null])
  })

  it('should wrap undefined in an array', () => {
    expect(castArray(undefined)).toEqual([undefined])
  })

  it('should return empty array when called with no arguments', () => {
    expect(castArray()).toEqual([])
  })

  it('should return the same array if value is already an array', () => {
    const array = [1, 2, 3]
    expect(castArray(array)).toBe(array)
  })
  
})