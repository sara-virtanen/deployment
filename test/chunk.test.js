// chunk.test.js
// 2026-03-22
// Author: Sara Virtanen
// Unit tests for the chunk function. Verifies correct array chunking behavior.

import { describe, it, expect } from 'vitest'
import chunk from '../src/chunk.js'

describe('chunk', () => {

  it('should split array into chunks of given size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  })

  it('should handle uneven chunks', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
  })

  it('should default to chunk size of 1', () => {
    expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']])
  })

  it('should return empty array for empty input', () => {
    expect(chunk([])).toEqual([])
  })

  it('should return empty array for null input', () => {
    expect(chunk(null)).toEqual([])
  })

  it('should return empty array for size less than 1', () => {
    expect(chunk(['a', 'b'], 0)).toEqual([])
  })
  
})