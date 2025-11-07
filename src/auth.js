
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./db/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
 async signIn({user}) {
    const id  = user?.id
    const name = user?.name
    const email = user?.email
    const image = user?.image

    const isExist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!!!isExist === null){
        await prisma.user.create({
            data: {
                email: email,
                image: image,
                name: name,
                id: id
            }
                
        })
    }
    
    return true
 }

  }
})