import React from 'react'
import { render, createMatchMedia } from 'theme-test-utils'
import CalculatorDisplay from './calculator-display'

describe('Calculator Tests', () => {
  // using the css-mediaquery polyfill before each test
  // used for ThemeProvider
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth)
  })

  test('it renders', () => {
    const { container } = render(<CalculatorDisplay value="0" />, {
      theme: 'dark',
    })
    expect(container).toMatchInlineSnapshot(`
<div>
  <script>
    !function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');var e=localStorage.getItem('theme');if('system'===e||(!e&&false)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){d.style.colorScheme = 'dark';c.add('dark')}else{d.style.colorScheme = 'light';c.add('light')}}else if(e){c.add(e|| '')}else{c.add('dark')}if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'dark'}catch(e){}}()
  </script>
  <div
    css="[object Object]"
  >
    <div
      class="autoScalingText"
      data-testid="total"
      style="transform: scale(1,1);"
    >
      0
    </div>
  </div>
</div>
`)
  })
})
