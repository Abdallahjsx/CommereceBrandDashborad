import React from 'react'
import MyApp from './app'
import NextTopLoader from 'nextjs-toploader';
import { CustomizerContextProvider } from '../context/customizerContext'
import AuthContextProvider from '@/context/authContext'


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
      <body suppressHydrationWarning>
        <CustomizerContextProvider>
          <AuthContextProvider>
            <NextTopLoader color="#001170" />
            <MyApp>{children}</MyApp>
          </AuthContextProvider>
        </CustomizerContextProvider>
      </body>
    </html>
  )
}
