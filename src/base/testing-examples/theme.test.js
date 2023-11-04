import React from 'react';
import NavBar from '@/navigation/NavBar';
import { render, createMatchMedia } from 'theme-test-utils';
import { screen } from '@testing-library/react';

describe('My Tests', () => {
  // using the css-mediaquery polyfill before each test
  // used for ThemeProvider
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });

  // if a css-in-js styling solution was used, this would check the generated css
  // container.firstChild might need to be checked instead
  test('renders NavBar with ThemeProvider: Dark', () => {
    // const { container } = render(<NavBar />)
    render(<NavBar />);
    expect(
      screen.getByRole('navigation', {
        name: /site navigation/i,
      })
    ).toMatchInlineSnapshot(`
<nav
  aria-label="Site Navigation"
  role="navigation"
>
  <ul>
    <li>
      <a
        href="#"
      >
        One
      </a>
    </li>
    <li>
      <a
        href="#"
      >
        Two
      </a>
    </li>
    <li>
      <a
        href="#"
      >
        Three
      </a>
    </li>
  </ul>
</nav>
`);
  });
});
