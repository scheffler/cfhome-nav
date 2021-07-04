import { render } from '@redwoodjs/testing'

import ChoicePanel from './ChoicePanel'

describe('ChoicePanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChoicePanel />)
    }).not.toThrow()
  })
})
