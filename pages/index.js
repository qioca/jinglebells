import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jingle.Bells/</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://jingle.bells.hns.to/">🔔 Jingle Bells 🔔</a>
        </h1>

        <p className={styles.description}>
          jingle bells,{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
            <h3>jingle all the way!</h3>
            <p>Here we.. on an HNS driven sleigh!</p>
          </a>
    
        </div>
      </main>
    
    </div>
  )
}
