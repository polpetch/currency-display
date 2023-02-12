/* eslint-disable @next/next/no-head-element */

'use client';

import { store } from '@/store';
import { Provider } from 'react-redux';
import './globals.css';

import NavBar from './NavBar';

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
          <Provider store={store}>
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
          </Provider>
        </main>
      </body>
    </html>
  );
}
