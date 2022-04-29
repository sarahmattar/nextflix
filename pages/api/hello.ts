// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import type { Session } from 'next-auth/client'
import { getSession } from 'next-auth/client'

type Data = {
  content: string | Session | {}
}

type Session = {
  user?: {
    name?: string
    email?: string
    image?: string
  }
  expires?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({ req })
  console.log(session)

  if (session) {
    res.send({ content: session })
  } else {
    res.send({ content: 'You must sign in' })
  }
}
