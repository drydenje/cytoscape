import React from 'react'
// import { render } from '@testing-library/react'
import { render, createMatchMedia } from 'theme-test-utils'
import AutoScalingText from './auto-scaling-text'

describe('auto-scaling-text', () => {
  // using the css-mediaquery polyfill before each test
  // used for ThemeProvider
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth)
  })

  test('renders ast', () => {
    render(<AutoScalingText />)
    // const { debug } = render(<AutoScalingText />)
    // debug()
  })
})
