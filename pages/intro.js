import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from '../components/Image'
import styles from '../styles/IntroPage.module.css'

const IntroPage = () => {
  const router = useRouter()
  const [ctaText, setCtaText] = useState('立即使用')

  const handleCallToAction = () => {
    setCtaText('啟動中...')
    router.push('/')
  }

  return (
    <div className={styles.w}>
      <nav>
        <section>
          <div className={styles.nav}>
            <div className="logo">台灣旅遊景點導覽地圖</div>
            <div className={styles.btnCta} onClick={handleCallToAction}>{ctaText}</div>
          </div>
        </section>
      </nav>

      <main>
        <section>
          <div className={styles.wrapper}>
            <div className={styles.node}>
              <h1>在地圖上探索台灣的旅遊景點</h1>
            </div>
            <div className={styles.node}>
              <Image src="/images/intro/search-filter.png" alt="search filter" />
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.wrapper} ${styles.reverse}`}>
            <div className={styles.node}>
              <h3>顯示搜尋結果列表，並標記在地圖上</h3>
            </div>
            <div className={styles.node}>
              <Image src="/images/intro/search-result.png" alt="search result" />
            </div>
          </div>
        </section>

        <section>
          <div className={styles.wrapper}>
            <div className={styles.node}>
              <h3>點擊感興趣的景點，來獲得更多相關的訊息</h3>
            </div>
            <div className={styles.node}>
              <Image src="/images/intro/search-result-detail.png" alt="search result detail" />
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles.wrapper} ${styles.reverse}`}>
            <div className={styles.node}>
              <h1>資料來源</h1>
              <p>資料來源由交通部與各公共運輸機關協作整合的「公共運輸整合資訊流通服務平臺」提供，平臺涵蓋的資料包含公路、 軌道、航空及航運4大類公共運輸旅運相關動靜態資料</p>
            </div>
            <div className={styles.node}>
              <Image src="/images/PTX_logo.png" alt="資料介接「交通部PTX平臺」" />
            </div>
          </div>
        </section>

        <section>
          <div className={styles.wrapper}>
            <div className={styles.node}>
              <h1>RWD支援</h1>
              <p>支援手機、平版、桌機，多種平台的顯示裝置</p>
            </div>
            <div className={styles.node}>
              <Image src="/images/intro/device-rwd.png" alt="support rwd" />
            </div>
          </div>
        </section>

        <section>
          <div className={styles.cta}>
            <div className={styles.btnCta} onClick={handleCallToAction}>{ctaText}</div>
          </div>
        </section>
      </main>

      <footer>
        作者：<a href="https://ahung888.github.io/" target="_blank" rel="noopener noreferrer">ahung888</a>
      </footer>
    </div>
  )
}

export default IntroPage