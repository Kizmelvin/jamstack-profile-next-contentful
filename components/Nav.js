import Link from "next/link";

function Nav() {
  const navlinks = (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/talks">
          <a>Talks</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <a>Articles</a>
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
