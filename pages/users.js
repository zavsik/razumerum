import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Main.module.scss'
import { useState, React, useRef } from 'react';

export default function Users() {
    const textInput = useRef('')
    const id = [0]

    const [users, setUsers] = useState([])
       
    const removeUser = (id) => {
        const cloneUsers = users.slice(0).filter(user => user.id !== id);
        setUsers(_ => (cloneUsers))
    }
    const cloneUsers = users.slice(0)

    function createUser () {
        let username = {id: id, user: textInput.current.value}
        cloneUsers.push(username)
        setUsers(cloneUsers)
        
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
                            users.map( (user, idx) => {
                                return (
                                    <>
                                        <li key={idx.id}>
                                            <Link href={`users/${user.id}`}><a>{user.user}</a></Link>
                                            <button onClick={ _ => removeUser( user.id ) }>
                                                Удалить
                                            </button>
                                        </li>
                                    </>
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
