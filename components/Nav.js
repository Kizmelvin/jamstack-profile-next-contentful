import Link from "next/link";

function Nav() {
  const navlinks = (
    <ul>
      <li>
        <Link href="/">
          <a onClick={() => setShowNav(false)}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a onClick={() => setShowNav(false)}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/talks">
          <a onClick={() => setShowNav(false)}>Talks</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <a onClick={() => setShowNav(false)}>Articles</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="nav">
      <Link href="/">
        <h1 className="logo">Ekene</h1>
      </Link>
      <div className="right-nav">{navlinks}</div>
    </nav>
  );
}

export default Nav;
