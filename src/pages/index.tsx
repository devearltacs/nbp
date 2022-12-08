import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards/Cards'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="description" content="Is a Next.js Boilerplate for easy development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js Boilerplate!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Cards
            cardLink="https://nextjs.org/docs"
            cardTitle="Documentation"
            cardDescription="Find in-depth information about Next.js features and API."
          />

          <Cards
            cardLink="https://nextjs.org/learn"
            cardTitle="Learn"
            cardDescription="Learn about Next.js in an interactive course with quizzes!"
          />

          <Cards
            cardLink="https://github.com/vercel/next.js/tree/canary/examples"
            cardTitle="Examples"
            cardDescription="Discover and deploy boilerplate example Next.js projects."
          />

          <Cards
            cardLink="https://github.com/vercel/next.js/tree/canary/examples"
            cardTitle="Deploy"
            cardLinkTarget='_blank'
            cardLinkRel='noopener noreferrer'
            cardDescription="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
