import React from 'react'
import {GiBabyFace} from 'react-icons/gi'
import styles from '../styles/Nav.module.css'

const Nav = ({ show, onNavClose }) => {
  return (
    <div>
      <div className={`nav-panel ${show ? 'active' : ''} ${styles.navInfo}`}>
        <GiBabyFace className={styles.logo} size="5rem" />
        <div className={styles.navInfoName}>台灣旅遊景點導覽地圖</div>
        <div>資料介接「交通部PTX平臺」</div>
        <a href="https://ptx.transportdata.tw/PTX/" target="_blank" rel="noreferrer"><img src="/images/PTX_logo.png" alt="資料介接「交通部PTX平臺」" /></a>
      </div>
      <div className={`screen-mask ${show ? 'active' : ''}`} onClick={onNavClose}/>
    </div>
  )
}

export default Nav