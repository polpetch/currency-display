/* eslint-disable @next/next/no-head-element */

'use client';

import { satangApi } from '@/features/apiSlice';
import { store } from '@/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
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
              <ApiProvider api={satangApi}>
                <div style={{ marginLeft: 45 }}>{children}</div>
              </ApiProvider>
            </div>
          </Provider>
        </main>
      </body>
    </html>
  );
}
