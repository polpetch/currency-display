/* eslint-disable @next/next/no-head-element */

import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <ul>
            <li>
              <Link href="/btc_thb">BTC/THB</Link>
            </li>
            <li>
              <Link href="/busd_thb">BUSD/THB</Link>
            </li>
            <li>
              <Link href="/usdt_thb">USDT/THB</Link>
            </li>
          </ul>
        </main>
        {children}
      </body>
    </html>
  );
}
