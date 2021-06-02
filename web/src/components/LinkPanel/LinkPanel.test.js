import { render } from '@redwoodjs/testing'

import LinkPanel from './LinkPanel'

describe('LinkPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkPanel />)
    }).not.toThrow()
  })
})
