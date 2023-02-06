/* eslint-disable @next/next/no-head-element */

import NavBar from './NavBar';
import './globals.css';

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
          <div
            style={{
              display: 'flex',
              textAlign: 'left',
              justifyContent: 'center ',
            }}
          >
            <NavBar />

            <div style={{ marginLeft: 45 }}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
