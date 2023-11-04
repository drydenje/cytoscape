import React from 'react'
import PropTypes from 'prop-types'
import { render as rtlRender } from '@testing-library/react'
import ThemeProvider from '@/base/theme-provider'
import mediaQuery from 'css-mediaquery'

// matchMedia polyfill
// https://github.com/ericf/css-mediaquery (actual polyfill)
// https://mui.com/material-ui/react-use-media-query/#testing (usage example)
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  })
}

// 'theme' could also be an object (more likely), such as a theme object, or redux, etc. The default would be imported at the top of the file
function render(ui, { theme = 'dark', ...options } = {}) {
  function Wrapper({ children }) {
    return (
      <ThemeProvider attribute="class" defaultTheme={theme}>
        {children}
      </ThemeProvider>
    )
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { render, createMatchMedia }
