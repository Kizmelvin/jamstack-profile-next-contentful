import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const navlinks = (
    <ul className={!navOpen ? "navLinks" : "navLinks open"}>
      <li onClick={() => setNavOpen(false)}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li onClick={() => setNavOpen(false)}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li onClick={() => setNavOpen(false)}>
        <Link href="/talks">
          <a>Talks</a>
        </Link>
      </li>
      <li onClick={() => setNavOpen(false)}>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <Link href="/">
        <h1 className="logo">Ekene</h1>
      </Link>
      {navlinks}
      <div>
        <label className="label">
          {!navOpen ? (
            <FaBars onClick={handleNav} />
          ) : (
            <FaTimes onClick={handleNav} />
          )}
        </label>
      </div>
    </nav>
  );
}

export default Nav;
