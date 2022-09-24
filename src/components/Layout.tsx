import { FC, ReactNode } from "react"
import Head from "next/head"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>気分dish</title>
        <meta
          name='description'
          content='気分・状態で料理をオススメするサービス'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-blue-500 shadow-lg w-full py-2 top-0 z-100 duration-300 group fixed hover:bg-red-500'>
        <nav className='flex mx-5 items-center justify-between'>
          <h1 className='cursor-pointer mt-0 text-white mb-1 transform text-2xl duration-500 group-hover:(rotate-360 translate-x-20 scale-125) '>
            <span className='font-mono'>気分</span>
            <span className='font-bold'>dish</span>
          </h1>
        </nav>
      </header>
      <main className='bg-gray-100 min-h-100vh'>
        <div className='mx-auto max-w-1150px px-2 pt-100px pb-70px break-words sm:pt-130px'>
          {children}
        </div>
      </main>
    </>
  )
}