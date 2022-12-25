import { renderHook } from '@testing-library/react'
import table from './table'

describe('table', () => {
  it('...', () => {
    const { result } = renderHook(() => table())

    expect(result.current).toBe(true)
  })
})
