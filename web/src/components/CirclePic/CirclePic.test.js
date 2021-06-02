import { render } from '@redwoodjs/testing'

import CirclePic from './CirclePic'

describe('CirclePic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CirclePic />)
    }).not.toThrow()
  })
})
