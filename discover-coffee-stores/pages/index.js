import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Coffe Connoisseur</h1>
        <Banner/>
      </main>
    </div>
  )
}
