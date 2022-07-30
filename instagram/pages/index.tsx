import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" />
      </Head>
        <Header />
        <Feed />
        <Modal />
    </div>
  )
}
