import * as React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My App",
  description:
    "This is a boilerplate for Next.js with TypeScript, Tailwind CSS + shadcn/ui, ESLint, Prettier, and Vitest.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("light", inter.className)}>{children}</body>
    </html>
  )
}
