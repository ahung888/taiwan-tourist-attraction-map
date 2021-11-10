import React from 'react';
import { showEntity } from './Map'
import styles from '../styles/Card.module.css'
import { getTags } from '../utils/dataHelper'
import { BsTags } from 'react-icons/bs'

const Card = ({ data, onCardClick }) => {
  const renderedTags = getTags(data).map((tag,i) => (
    <div key={i} className={styles.tag}>{tag}</div>
  ))

  const src1 = data?.Picture?.PictureUrl1 || ''
  const alt1 = data?.Picture?.PiPictureDescription1ctureUrl1 || ''

  const handleClick = () => {
    onCardClick(data)
    showEntity(data)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <div>
        <div className={styles.title}>{data?.Name}</div>
        <div className={styles.shortCardIconRow}>
          <BsTags size="1.2rem" /><span>{renderedTags}</span>
        </div>
      </div>
      {src1 ? <img className={styles.img} src={src1} alt={alt1} /> : <></>} 
    </div>
  )
}

export default Card