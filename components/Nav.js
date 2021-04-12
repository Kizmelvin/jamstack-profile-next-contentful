import Link from "next/link";
import { FaBars } from "react-icons/fa";

function Nav() {
  const navlinks = (
    <ul className="header-links">
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

      {/* <div className="right-nav">{navlinks}</div> */}
      {/* <div className="menu-icon">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <FaBars />
        </label>
      </div> */}
    </nav>
  );
}

export default Nav;
