import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  setDevice,
  setCurrentEntity,
  emptyEntities,
  setShowItemPage,
  setShowItemListPage
} from '../store'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ItemListSlidePane from '../components/ItemListSlidePane'
import ItemSlidePane from '../components/ItemSlidePane'
import Map from '../components/Map'

export default function Home() {
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false)
  const currentEntity = useSelector(selectGlobal('currentEntity'))
  const showItemPage = useSelector(selectGlobal('showItemPage'))
  const showItemListPage = useSelector(selectGlobal('showItemListPage'))

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        dispatch(setDevice({ width: window.innerWidth, height: window.innerHeight }))
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleFooterPaneClosed = () => {
    dispatch(setShowItemListPage(false))
    dispatch(setShowItemPage(false))
  }
  const handleOnSelectItem = (item) => {
    dispatch(setCurrentEntity(item))
    dispatch(setShowItemPage(true))
  }
  const handleShowMap = () => {
    dispatch(setShowItemListPage(false))
    dispatch(setShowItemPage(false))
  }
  const handleSearchResultRemove = () => {
    dispatch(setShowItemListPage(false))
    dispatch(setShowItemPage(false))
    dispatch(emptyEntities())
  }

  return (
    <div>
      <Header
        onMenuClick={() => setShowNav(true)}
        onProfileClick={() => {}}
        showReturnButton={showItemPage}
        onReturnButtonClick={() => dispatch(setShowItemPage(false))}
        onCrossButtonClick={handleSearchResultRemove}
      />
      <Nav show={showNav} onNavClose={() => setShowNav(false)} />
      <ItemListSlidePane show={showItemListPage} onSelectItem={handleOnSelectItem} />
      <ItemSlidePane show={showItemPage} data={currentEntity} />
      <Map />
      <Footer
        onFooterPaneClosed={handleFooterPaneClosed}
        showItemList={(open) => dispatch(setShowItemListPage(open))}
        showMap={handleShowMap}
      />
    </div>
  )
}
