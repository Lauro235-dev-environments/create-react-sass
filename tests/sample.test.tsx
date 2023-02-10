import { render, screen } from '@testing-library/react'

import App from '../src/App'

it('renders hello world', () => {
  // ARRANGE
  // ACT
  render(<App />)
  // ASSERT
  expect(
    screen.getByRole('heading', {
      level: 1,
    })
  ).toHaveTextContent('Hello World')

  
})