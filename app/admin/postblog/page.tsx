// app/admin/post-blog/page.tsx
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { jwtDecode } from "jwt-decode"
import { BlogForm } from "@/components/blog-form"
import { NavigationMenu } from "@/components/navigation-menu"

export default async function AdminPage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (!token) {
        console.log(1111)
        redirect("/admin/signin")
    }

    const decoded = jwtDecode<{ sub: string }>(token)
    const userId = decoded.sub

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: userId })
    })

    if (!response.ok) {
        console.log("Failed to fetch user data")
        redirect("/")
    }

    const result = await response.json()
    const userData = result.data?.[0]

    if (!userData?.isAdmin) {
        console.log(2222)
        redirect("/")
    }

    return (
        <div className="min-h-screen bg-[rgb(var(--color-bg-primary))]">
            <NavigationMenu />
            <BlogForm />
        </div>
    )
}
