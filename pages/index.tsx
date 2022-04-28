import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/client'

const Home: NextPage = () => {
  const [session, loading] = useSession()

  console.log(session, loading)

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
        {!session && (
          <>
            Not Signed In <br />
            <button onClick={() => signIn()}>Sign In</button>
          </>
        )}{' '}
        {
          <>
            session &&{' '}
            <>
              {/* Signed in as {session.user.email} */}
              <br />
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          </>
        }
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
            type="submit"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
