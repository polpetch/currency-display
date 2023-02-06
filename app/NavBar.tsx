'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';

export default function NavBar() {
  const currentRoute = usePathname();

  return (
    <nav style={{ lineHeight: 3 }}>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link
            href="/btc_thb"
            className={
              currentRoute === '/btc_thb' ? styles.active : styles.nonActive
            }
          >
            BTC/THB
          </Link>
        </li>
        <li>
          <Link
            href="/busd_thb"
            className={
              currentRoute === '/busd_thb' ? styles.active : styles.nonActive
            }
          >
            BUSD/THB
          </Link>
        </li>
        <li>
          <Link
            href="/usdt_thb"
            className={
              currentRoute === '/usdt_thb' ? styles.active : styles.nonActive
            }
          >
            USDT/THB
          </Link>
        </li>
      </ul>
    </nav>
  );
}
