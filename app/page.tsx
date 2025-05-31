"use client"
import { HomePage } from "@/components/home-page"
import { Loading } from "@/components/loading"
import { NavigationMenu } from "@/components/navigation-menu"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PortfolioTerminal() {
  const router = useRouter()

  useEffect(() => {
    router.push("/home")
  }, [])
  return (
    <div className="min-h-screen bg-slate-950">
      <Loading />
    </div>
  )
}
