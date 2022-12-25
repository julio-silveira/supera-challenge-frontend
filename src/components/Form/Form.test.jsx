import { renderHook } from '@testing-library/react'
import form from './form'

describe('form', () => {
  it('...', () => {
    const { result } = renderHook(() => form())

    expect(result.current).toBe(true)
  })
})
