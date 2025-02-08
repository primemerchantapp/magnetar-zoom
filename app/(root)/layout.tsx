import StreamVideoProvider from '@/providers/StreamClientProviders'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Magnetar Zoomy",
  description: "Magnetar Zoomy",
  keywords: "zoom, clone, nextjs, typescript",
  icons: {
    icon: '/icons/logo.svg',
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider >
        {children}
      </StreamVideoProvider>

    </main>
  )
}

export default RootLayout
