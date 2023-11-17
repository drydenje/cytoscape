import Link from 'next/link';

const NavBar = () => {
  return (
    <nav role="navigation" aria-label="Site Navigation">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cytoscape">Cytoscape 1</Link>
        </li>
        <li>
          <Link href="/tree">Graph Tests</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
