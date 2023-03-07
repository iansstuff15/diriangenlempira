import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Splash from '../components/splash'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
     
      <main >
        <div>
          <Splash/>
          <Header/>
        </div>
      </main>
    </>
  )
}
