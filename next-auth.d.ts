// next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      access_token ?: string | null
    }
  }

  interface DefaultSession {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      access_token?: string | null
    }
    expires: ISODateString
  }
  
  interface User {
    access_token?: string
    email?: string | null
    name?: string | null
    image?: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token?: string | null
    email?: string | null
    name?: string | null
    image?: string | null
  }
}
