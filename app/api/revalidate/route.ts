import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { path, token } = body

        // Verify the request is authorized (you can add your own token)
        if (token !== process.env.REVALIDATION_TOKEN) {
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
        }

        // Revalidate specific paths
        if (path) {
            revalidatePath(path)
        } else {
            // Revalidate all blog-related paths
            revalidatePath('/blog')
            revalidatePath('/home')
            revalidatePath('/about')
            revalidatePath('/projects')
            revalidatePath('/contact')
        }

        return NextResponse.json({
            message: 'Revalidation successful',
            revalidated: true,
            now: Date.now()
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Error revalidating',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Revalidation endpoint is working',
        timestamp: Date.now()
    })
} 