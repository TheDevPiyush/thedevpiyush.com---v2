"use client"
import { useUserStore } from '@/lib/useStore'
import Link from 'next/link';
import React from 'react'

export default function CreateBlog() {
    const { isAdmin } = useUserStore();
    return (
        <div>{isAdmin &&
            <Link href="/admin/postblog" className="bg-blue-500 text-white px-4 py-2 rounded-md" style={{ backgroundColor: 'rgb(var(--color-primary))', color: 'rgb(var(--color-text-primary))' }} >
                Post Blog
            </Link>}
        </div>
    )
}
