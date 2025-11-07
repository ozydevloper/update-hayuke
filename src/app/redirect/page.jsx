"use client"
import { redirect, useRouter } from "next/navigation"
import "dotenv/config"
import { useEffect } from "react"

const Page = () => {
    useEffect(() => {
        redirect(process.env.BASE_URL)

    })
}
export default Page