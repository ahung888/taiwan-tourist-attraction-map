import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  moveToPreviousEntity,
  moveToNextEntity,
  setShowItemPage,
  setShowItemListPage
} from '../store'
import { getTags } from '../utils/dataHelper'
import { showEntity } from '../components/Map'
import { ApiContext } from '../store/api'

import { AiOutlineFieldTime, AiOutlineGlobal, AiOutlineCloudDownload } from 'react-icons/ai'
import { BsTelephoneFill, BsTags } from 'react-icons/bs'
import { BiBus } from 'react-icons/bi'
import { FaParking } from 'react-icons/fa'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { FiMapPin } from 'react-icons/fi'
import { MdDownloading } from 'react-icons/md'

import styles from '../styles/SlidePane.module.css'
import cardStyles from '../styles/Card.module.css'

const ItemSlidePane = () => {
  const dispatch = useDispatch()
  const api = useContext(ApiContext)
  const showItemPage = useSelector(selectGlobal('showItemPage'))
  const currentEntity = useSelector(selectGlobal('currentEntity'))
  const previousEntity = useSelector(selectGlobal('previousEntity'))
  const nextEntity = useSelector(selectGlobal('nextEntity'))
  const status = useSelector(selectGlobal('status'))
  const { isMobile } = useSelector(selectGlobal('device'))
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

  const scrollContentToTop = () => {
    document.getElementById('item-page-content').scrollTop = 0
  }
  const handlePrevClick = () => {
    dispatch(moveToPreviousEntity())
    setTimeout(() => scrollContentToTop(),10)
  }
  const handleNextClick = () => {
    dispatch(moveToNextEntity())
    setTimeout(() => scrollContentToTop(),10)
  }
  const handleMapNavigationClick = () => {
    if ( isMobile ) {
      dispatch(setShowItemListPage(false))
      dispatch(setShowItemPage(false))
    }
    showEntity(data)
  }
  const handleLoadMoreClick = () => {
    dispatch(api.get()())
  }

  let classname = `${styles.slidePane} ${styles.posLeft} ${styles.layer2}`
  classname += showItemPage ? ` ${styles.posLeftActive}` : ''

  return (
    <div className={classname}>
      <div className={styles.content} id="item-page-content">
        {renderedContent}
      </div>
      <div className={styles.nav}>
        {previousEntity
          ? <div className={styles.navBtn} onClick={handlePrevClick}><FcPrevious /></div>
          : <div className={styles.navBtnEmpty} />
        }
        
        <div className={styles.navBtnLight} onClick={handleMapNavigationClick}><FiMapPin size="1.5rem" /></div>
        
        {nextEntity
          ? <div className={styles.navBtn} onClick={handleNextClick}><FcNext /></div>
          : api.hasMore()
            ? status === 'loading'
              ? <div className={styles.navBtnLoading}><MdDownloading /></div>
              : <div className={styles.navBtnLoading} onClick={handleLoadMoreClick}><AiOutlineCloudDownload /></div>
            : <div className={styles.navBtnEmpty} />
        }
      </div>
    </div>
  )
}

export default ItemSlidePane