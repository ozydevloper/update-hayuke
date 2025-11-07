"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    return signOut({redirectTo: "/redirect"})
}