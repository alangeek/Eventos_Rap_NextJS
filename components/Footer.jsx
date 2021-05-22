import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Rap Eventos 2021</p>
      <p>
        <Link href='/about'>Sobre esse projeto</Link>
      </p>
    </footer>
  )
}
