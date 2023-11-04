import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AutoScalingText from '@/base/testing-examples/auto-scaling-text'

test('renders', () => {
  ReactDOMServer.renderToString(<AutoScalingText />)
})
