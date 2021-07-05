import { render } from '@redwoodjs/testing'

import Persona from './Persona'

describe('Persona', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Persona />)
    }).not.toThrow()
  })
})
