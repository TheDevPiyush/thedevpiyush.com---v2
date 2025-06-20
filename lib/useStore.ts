import { create } from 'zustand'

interface User {
    id: string,
    email: string,
    isAdmin: Boolean,
    setUser: (user: User) => void
    clearUser: () => void
}

export const useUserStore = create<User>((set) => ({
    id: "",
    email: "",
    isAdmin: false,
    setUser: (user) => set(user),
    clearUser: () => set({ isAdmin: false, email: "", id: "" })
}))