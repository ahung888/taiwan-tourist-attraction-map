import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectGlobal } from '../store'
import { getTags } from '../utils/dataHelper'

import { AiOutlineFieldTime, AiOutlineGlobal } from 'react-icons/ai'
import { BsTelephoneFill, BsTags } from 'react-icons/bs'
import { BiBus } from 'react-icons/bi'
import { FaParking } from 'react-icons/fa'
import styles from '../styles/SlidePane.module.css'
import cardStyles from '../styles/Card.module.css'

const ItemSlidePane = () => {
  const showItemPage = useSelector(selectGlobal('showItemPage'))
  const currentEntity = useSelector(selectGlobal('currentEntity'))
  const data = currentEntity

  let renderedContent = ''
  if (data !== null) {
    const renderedTags = getTags(data).map((tag,i) => (
      <div key={i} className={cardStyles.tag}>{tag}</div>
    ))

    const imgSrc = data?.Picture?.PictureUrl1
    const imgAlt = data?.Picture?.PictureDescription1

    const renderedThumbnail = imgSrc !== undefined
      ? <div className={cardStyles.thumbnails}><img src={imgSrc} alt={imgAlt} /></div>
      : ''

    renderedContent = (
      <>
        {renderedThumbnail}
        <div className={cardStyles.articleTitle}>{data?.Name}</div>

        <div className={cardStyles.iconRow}>
          <BsTags size="1.2rem" /><span>{renderedTags}</span>
        </div>

        <p>{data?.Description}</p>
        <p>{data?.DescriptionDetail}</p>

        {data?.WebsiteUrl
          ? <div className={cardStyles.iconRow}>
              <AiOutlineGlobal size="1.2rem" /><a href={data?.WebsiteUrl} target="_blank" rel="noreferrer">{data?.WebsiteUrl}</a>
            </div>
          : ''
        }

        {data?.OpenTime
          ? <div className={cardStyles.iconRow}>
              <AiOutlineFieldTime size="1.2rem" /><span>{data?.OpenTime}</span>
            </div>
          : ''
        }

        {data?.Phone
          ? <div className={cardStyles.iconRow}>
              <BsTelephoneFill size="1.2rem" /><a href={`tel:${data?.Phone}`} rel="noreferrer">{data?.Phone}</a>
            </div>
          : ''
        }

        {data?.TravelInfo
          ? <div className={cardStyles.iconRow}>
              <BiBus size="1.2rem" /><span>{data?.TravelInfo}</span>
            </div>
          : ''
        }

        {data?.ParkingInfo
          ? <div className={cardStyles.iconRow}>
              <FaParking size="1.2rem" /><span>{data?.ParkingInfo}</span>
            </div>
          : ''
        }

      </>
    )
  }

  let classname = `${styles.slidePane} ${styles.posLeft} ${styles.layer2}`
  classname += showItemPage ? ` ${styles.posLeftActive}` : ''

  return (
    <div className={classname}>
      {renderedContent}
    </div>
  )
}

export default ItemSlidePane