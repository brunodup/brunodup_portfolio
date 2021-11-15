import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';

function Nav() {
  const [navOpen,setNavOpen] = useState(false);

  function toggleNav() {
    navOpen === false ? setNavOpen(true) : setNavOpen(false);
  }


  return (
    <>
      <nav className={styles.nav}>
        <div className={`${styles.navOpen} ${navOpen === true ? styles.navActive : ''}`} onClick={() => toggleNav()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.navContent} ${navOpen === true ? styles.navActive : ''}`}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a>About</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li> */}
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/" locale="en">
              <a>english</a>
            </Link>
          </li>
          <li>
            <Link href="/" locale="pt-BR">
              <a>portuguese</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;

