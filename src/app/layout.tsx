import React from 'react'
import MyApp from './app'
import NextTopLoader from 'nextjs-toploader';
import { CustomizerContextProvider } from '../context/customizerContext'


export const metadata = {
  title: 'Alluvo',
  description: 'All Of Your Favorite',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <CustomizerContextProvider>
          <NextTopLoader color="#001170" />
          <MyApp>{children}</MyApp>
        </CustomizerContextProvider>
      </body>
    </html>
  )
}
