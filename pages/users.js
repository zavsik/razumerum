import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Main.module.scss'
import { useState, React, useRef } from 'react';

export default function Users() {
    const textInput = useRef('')

    const [users, setUsers] = useState([{id: 1, user: 'Hello'}])
       
    const removeUser = (id) => {
        const cloneUsers = users.slice(0).filter(user => user.id !== id);
        setUsers(_ => (cloneUsers))

    }
    const createUser = () => {
        console.log(textInput.current.value)
        let cloneUsers = users.slice(0)
        console.log(users)
        let username = [
            {id: 4, user: textInput.current.value}
        ]
        setUsers(_ => (username))
    }

    

    return (
        <div className={styles.container}>
            <Head>
                <title>Пользователи</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.navbar}>
                    <Link href={'/'}><a>Назад</a></Link>
                </div>
                <div className={styles.main__users}>
                    <div className={styles.frame_users}>
                    <ul>
                        {
                            users.map( user => {
                                return (
                                    <li key={user.id}>
                                        {user.user}
                                        <button onClick={ _ => removeUser( user.id ) }>
                                            Удалить
                                        </button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    </div>
                    <div className={styles.create_users}>
                        <input ref={textInput} placeholder='Введите имя: ' required/>
                        <button onClick={createUser}>Создать</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
