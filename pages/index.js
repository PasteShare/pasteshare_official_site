import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export async function getStaticProps({ locale }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch(`https://.../posts?locale=${locale}`)
  // const posts = await res.json()

  // if (posts.length === 0) {
  //   return {
  //     notFound: true,
  //   }
  // }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      locale,
    },
  }
}

export default function Home(props) {
  const isZh = props.locale == "zh";
  let isDarkMode = false;
  if (typeof window !== "undefined") {
    isDarkMode = window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{isZh ? "粘贴分享-跨平台局域网剪切板工具" : "PasteShare - Cross Platform Clipboard on LAN" }</title>
        <meta name="description" content="Exchange files and texts between devices on same wifi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<div className={styles.filter} />*/}
      <main className={styles.main}>
        <h1 className={styles.title}>
          {isZh ? "欢迎使用 " : "Welcome to "}<a href="">{isZh ? "粘贴分享 " : "PasteShare"}</a>
        </h1>

        <p className={styles.description}>
        {isZh ? "跨平台的，安全的局域网剪切板工具" : 'Exchange files and texts between devices on same wifi.\nYou can start PasteShare after copying the text. \n "Share files To PasteShare" in other App.'}{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <div className={styles.cardContainer}>
            <a href="https://play.google.com/store/apps/details?id=com.liuxuanping.local_area_network" className={styles.card}>
              <Image alt="google play" src="/images/google-play.svg" width={32} height={32} />
              <div>
                <span style={{fontSize:"0.8rem"}}>GET IT ON</span>
                <h3 style={{ flex: 1 }}>Google Play</h3>
              </div>
            </a>
            <span style={{ textAlign: 'right', margin: "10px 10px 0 0", fontSize: "0.8rem", color: "#666666" }}>Version: 1.0.1</span>
            <span style={{ textAlign: 'right', margin: "0px 10px", fontSize: "0.8rem", color: "#666666" }}>Date: 2021.04.10</span>
            <a style={{ textDecoration: "underline" }} href="/Android/app-arm64-v8a-release.apk">Download apk</a>
          </div>
          <div className={styles.cardContainer}>
            <a href="https://apps.apple.com/us/app/%E7%B2%98%E8%B4%B4%E5%88%86%E4%BA%AB/id1560446008" className={styles.card}>
              <Image src={isDarkMode ? "/images/apple-white.svg" : "/images/apple.svg"} alt="apple app store" width={32} height={32} />
              <div>
                <span style={{fontSize:"0.8rem"}}>Download on the</span>
                <h3 style={{ flex: 1 }}>App Store</h3>
              </div>
            </a>
            <span style={{ textAlign: 'right', margin: "10px 10px 0 0", fontSize: "0.8rem", color: "#666666" }}>Version: 1.0.0</span>
            <span style={{ textAlign: 'right', margin: "0px 10px", fontSize: "0.8rem", color: "#666666" }}>Date: 2021.04.02</span>
            <a style={{ textDecoration: "underline" }} href="https://testflight.apple.com/join/vzvzXODR">Download 1.0.1beta</a>
          </div>
          <div className={styles.cardContainer}>
            <a
              style={{  }}
              className={styles.card}
              onClick={() => {
                location.href = "/Windows/PasteShare.zip";
              }}
            >
              <Image alt="windows store" src="/images/windows.svg" width={25.6} height={25.6} />
              <div className={styles.winTitle}>
                <span style={{fontSize:"0.8rem"}}>Download from</span>
                <h3 style={{ flex: 1 }}>Win Store</h3>
              </div>
            </a>
            <span style={{ textAlign: 'right', margin: "10px 10px 0 0", fontSize: "0.8rem", color: "#666666" }}>Version: 1.0.1</span>
            <span style={{ textAlign: 'right', margin: "0px 10px", fontSize: "0.8rem", color: "#666666" }}>Date: 2021.04.10</span>

            <a href="/Windows/PasteShare.zip">download 1.0.1</a>
          </div>
          <div className={styles.cardContainer}>
            <a
              href="/Linux/PasteShare.zip"
              className={styles.card}
            >
              <Image alt="ubuntu" src="/images/ubuntu.svg" width={32} height={32} />
              <div className={styles.winTitle}>
                <span style={{fontSize:"0.8rem"}}>Download for</span>
                <h3 style={{ flex: 1 }}>Ubuntu</h3>
              </div>
            </a>
            <span style={{ textAlign: 'right', margin: "10px 10px 0 0", fontSize: "0.8rem", color: "#666666" }}>Version: 1.0.1</span>
            <span style={{ textAlign: 'right', margin: "0px 10px", fontSize: "0.8rem", color: "#666666" }}>Date: 2021.04.10</span>

            <a >tested on 20.04 LTS</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ margin: "0 0.4rem 0 0" }}>Xuanping 2021</span>
          <Image src="/favicon.ico" alt="Vercel Logo" width={16} height={16} />
        </a>
      </footer>
    </div>
  )
}
