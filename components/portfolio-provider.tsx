"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { getPortfolioData } from "@/lib/data/portfolio"

interface PortfolioContextType {
  portfolioData: any
  isLoading: boolean
  error: string | null
  refetch: () => Promise<void>
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await getPortfolioData()
      setPortfolioData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load portfolio data")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        isLoading,
        error,
        refetch: fetchData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider")
  }
  return context
}
