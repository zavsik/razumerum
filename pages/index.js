import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Main.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Razumer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
          <Link href={'/users'}><a>Пользователи</a></Link>
          <Link href={'/login'}><a>Вход</a></Link>
        </div>
      </main>
    </div>
  )
}
