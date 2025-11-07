
"use server"
import { signIn } from "@/auth"
 
export default async function login() {
  return await signIn("google")
} 