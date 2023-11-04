// Known Issue:??
// https://github.com/vercel/next.js/issues/52757
// since next 13.4.10 (opened on Jul 16)
// next/jest might be treating the backend code as a server component

// import React from 'react'
// import { renderToString } from 'react-dom/server';
// import ReactDOMServer from 'react-dom/server';
import AutoScalingText from '@/base/testing-examples/auto-scaling-text';

// let ReactDOMServer = null;

const ReactDOMServer = async function () {
  const t = (await import('react-dom/server.browser')).default;
  return t;
};

test('renders', () => {
  // typeof(ReactDOMServer);
  ReactDOMServer.renderToString(<AutoScalingText />);
  // return true
});

// console.log(window);
