import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const SignInStatus = () => {
    if (session) {
      return (
        <>
          <p className="text-white">Signed in as {session?.user?.name}</p>
          <button className="text-white" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      )
    }
    return (
      <>
        <p className="text-white">Not Signed In.</p>
        <button className="text-white" onClick={() => signIn()}>
          Sign in here
        </button>
      </>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Nextflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex w-full flex-1 flex-col items-center justify-center bg-black px-20 text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.9), rgba(135, 80, 156, 0.6)), url(netflix_bg.jpeg)',
        }}
      >
        <SignInStatus />
        <h1 className="max-w-lg text-5xl font-bold text-white">
          Unlimited Movies, TV Shows, and more.
        </h1>
        <h2 className="my-4 mt-4 mb-8 text-2xl text-white">
          Watch anywhere, cancel anytime.
        </h2>
        <p className="text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mt-4 flex">
          <input
            className="width-full bg-white p-4"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />
          <button
            className="border-bg-red-700 bg-red-700 px-6 text-lg text-white"
            onClick={() => signIn()}
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
