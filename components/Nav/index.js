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
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </li>
          {/* <li>
            <span>
              <Link href="/" locale="en">
                <a>english</a>
              </Link>
            </span>
            <span>
              <Link href="/" locale="pt-BR">
              <a>portuguese</a>
            </Link>
            </span>
          </li> */}
        </ul>
      </nav>
    </>
  )
}

export default Nav;

