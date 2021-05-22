import React from 'react'
import Head from 'next/head'

import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'


export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Rap Eventos | Encontre as batalhas mais quentes',
  description: 'Encontre o evento rap mais recente e outros',
  keywords: 'Música, Rap, DJ, Batalhas, Hip Hop, Eventos'
}
