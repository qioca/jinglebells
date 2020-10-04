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
            <p>Here we.. on an HNS driven sleigh</p>
          </a>

          <!--<a href="https://nextjs.org/learn" className={styles.card}>
            <h3>blockchain</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>decentralized</h3>
            <p></p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              something else here
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          finally something here.
        </a>
      </footer>
    </div>-->
  )
}
