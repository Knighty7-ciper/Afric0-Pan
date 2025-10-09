import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Pesa-Afrik - Pan-African Currency Exchange Platform",
  description: "Official African Currency Token (ACT) exchange platform. Real-time rates for 13+ African currencies.",
  keywords:
    "African currency exchange, ACT token, Pan-African payments, blockchain Africa, cross-border payments, Stellar blockchain, African fintech",
  authors: [{ name: "Pesa-Afrik Team" }],
  openGraph: {
    title: "Pesa-Afrik - Pan-African Currency Exchange",
    description: "Official African Currency Token (ACT) exchange platform. Real-time rates for 13+ African currencies.",
    type: "website",
    locale: "en_US",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Toaster />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
