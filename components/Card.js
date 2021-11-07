import React from 'react';
import { useDispatch } from 'react-redux'
import { setPopupInfo } from '../store'
import styles from '../styles/Card.module.css'
import { getTags } from '../utils/dataHelper'
import { BsTags } from 'react-icons/bs'

const Card = ({ data, onCardClick }) => {
  const dispatch = useDispatch()
  
  const renderedTags = getTags(data).map((tag,i) => (
    <div key={i} className={styles.tag}>{tag}</div>
  ))

  const {
    PictureUrl1: src1,
    PictureDescription1: alt1,
  } = data?.Picture

  const handleClick = () => {
    onCardClick(data)
    let event = new Event("flytospot")
    event.data = data
    document.dispatchEvent(event)
    dispatch(setPopupInfo(data))
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <div>
        <div className={styles.title}>{data?.Name}</div>
        <div className={styles.iconRow}>
          <BsTags size="1.2rem" /><span>{renderedTags}</span>
        </div>
      </div>
      {src1 ? <img className={styles.img} src={src1} alt={alt1} /> : <></>} 
    </div>
  )
}

export default Card