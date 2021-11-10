import React from 'react';
import styles from '../styles/Card.module.css'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const CardLoadMore = ({ onClick }) => {
  return (
    <div className={styles.cardLoadMore} onClick={onClick}>
      <AiOutlineCloudDownload size="3rem" /> 
    </div>
  )
}

export default CardLoadMore