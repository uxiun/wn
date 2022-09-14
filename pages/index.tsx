import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Shu from "./shu.mdx"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        Shu:
        <Shu/>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
