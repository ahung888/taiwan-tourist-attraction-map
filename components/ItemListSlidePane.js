import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  setCurrentEntity,
  setShowItemPage
} from '../store'
import Card from './Card'
import CardLoadMore from './CardLoadMore'
import styles from '../styles/SlidePane.module.css'
import { ApiContext } from '../store/api'

// const offsetForLoadingBuffer = 500

const ItemListSlidePane = () => {
  const dispatch = useDispatch()
  const api = useContext(ApiContext)
  const entities = useSelector(selectGlobal('entities'))
  const showItemListPage = useSelector(selectGlobal('showItemListPage'))

  // const handleScrolToBottom = () => {
  //   console.log('scroll to bottom')
  // }
  // const handleScroll = (e) => {
  //   const { offsetHeight, scrollTop, scrollHeight } = e.target
  //   if (scrollHeight - scrollTop - offsetForLoadingBuffer <= offsetHeight) {
  //     handleScrolToBottom()
  //   }
  // }

  // useEffect(() => {
  //   let node = document.getElementById('scrollContainer')
  //   node.addEventListener('scroll', handleScroll)
  //   return () => {
  //     node.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const handleCardClicked = (entity) => {
    dispatch(setCurrentEntity(entity))
    dispatch(setShowItemPage(true))
  }

  const renderedItems = Object.values(entities).map((entity, i) => (
    <Card key={i} data={entity} onCardClick={handleCardClicked} />
  ))

  let classname = `${styles.slidePane} ${styles.posBottom} ${styles.layer1}`
  classname += showItemListPage ? ` ${styles.posBottomActive}` : ''

  const handleLoadMore = () => {
    dispatch(api.get()())
  }

  return (
    <div className={classname} id="scrollContainer">
      {renderedItems}
      {api.hasMore()
        ? <CardLoadMore onClick={handleLoadMore} />
        : ''
      }
    </div>
  )
}

export default ItemListSlidePane