import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Main.module.scss'

export default function Id() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Пользователь</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.navbar}>
          <Link href={'/users'}><a>Назад</a></Link>
        </div>
      </main>
    </div>
  )
}
