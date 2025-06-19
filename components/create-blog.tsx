"use client"
import { useUserStore } from '@/lib/useStore'
import React from 'react'

export default function CreateBlog() {
    const { id, email, isAdmin } = useUserStore();
    return (
        <div>{isAdmin && "Create Blog"}</div>
    )
}
