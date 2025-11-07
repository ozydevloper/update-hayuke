
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./db/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
callbacks: {
      jwt: async ({ token, user }) => {
        if (user){
          const dbUser = await prisma.user.findUnique({
            where: { email: user.email },
            select: { role: true }
          })
          console.log(dbUser)

          if (!dbUser){
            const newUser = await prisma.user.create({
              data: {
                email: user.email,
                image: user.image,
                name: user.name,
              }
            })
            token.role = newUser.role
          }else{
            token.role = dbUser.role
          }
        }
        return token
      },
      session: async ({ session, token }) => {
        session.user.role = token.role
        return session
      },
    },
    session: {
      strategy: "jwt"
    }
  

})