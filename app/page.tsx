"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { i18n } from "@/i18n-config"

function getPreferredLanguage(): string {
  if (typeof window === "undefined") return i18n.defaultLocale

  // Check localStorage first
  const savedLang = localStorage.getItem("preferred-language")
  if (savedLang && i18n.locales.includes(savedLang as any)) {
    return savedLang
  }

  // Check browser language
  const browserLang = navigator.language.split("-")[0]
  if (i18n.locales.includes(browserLang as any)) {
    return browserLang
  }

  // Default fallback
  return i18n.defaultLocale
}

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const preferredLang = getPreferredLanguage()

    // Save preference
    localStorage.setItem("preferred-language", preferredLang)

    // Redirect to preferred language
    router.replace(`/${preferredLang}`)
  }, [router])

  // Show loading state while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
