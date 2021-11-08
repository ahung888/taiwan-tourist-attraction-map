import React from 'react'
import { useRouter } from 'next/router'
import {GiBabyFace} from 'react-icons/gi'
import styles from '../styles/Nav.module.css'

const Nav = ({ show, onNavClose }) => {
  const router = useRouter()
  return (
    <div>
      <div className={`nav-panel ${show ? 'active' : ''} ${styles.navInfo}`}>

        <header>
          <GiBabyFace className={styles.logo} size="5rem" />
          <h1>台灣旅遊景點導覽地圖</h1>
        </header>

        <main>
          <div>資料介接「交通部PTX平臺」</div>
          <a href="https://ptx.transportdata.tw/PTX/" target="_blank" rel="noopener noreferrer">
            <img src={`${router.basePath}/images/PTX_logo.png`} alt="資料介接「交通部PTX平臺」" />
          </a>
        </main>

        <footer>
          <div>ver: {process.env.APP_VERSION}</div>
        </footer>
      </div>

      <div className={`screen-mask ${show ? 'active' : ''}`} onClick={onNavClose}/>
    </div>
  )
}

export default Nav