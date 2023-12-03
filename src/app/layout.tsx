'use client'
import './globals.css'
import {ReactNode} from "react";
import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider></body>
    </html>
  )
}
