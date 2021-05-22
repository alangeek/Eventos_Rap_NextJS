import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Rap Eventos</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Eventos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
