import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'UX Research made simple'
export const siteTitle = 'UX Research made simple'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Become a total pro at doing user research—from planning it to conducting sessions to analyzing and reporting your findings.
          "
        />
        <meta
          property="og:image"
          content="https://www.uncoverux.buzz/api/og"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
        href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
        rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/logo.svg"
              className={utilStyles.borderCircle}
              height={64}
              width={64}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/logo.svg"
                className={utilStyles.borderCircle}
                height={64}
                width={64}
                alt={name}
              />
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
