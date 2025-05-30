import { NavigationMenu } from "@/components/navigation-menu"
import { HomePage } from "@/components/home-page"

export default function UIHomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <NavigationMenu />
      <HomePage />
    </div>
  )
}
