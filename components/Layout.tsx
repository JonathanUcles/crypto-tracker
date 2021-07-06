import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    <div className='bg-black text-white p-2'><h1 className='text-2xl text-center font-bold mb-2'>Crypto <span className='text-yellow-500'>Tracker</span>.</h1></div>

    </header>
    {children}
   
  </div>
)

export default Layout
