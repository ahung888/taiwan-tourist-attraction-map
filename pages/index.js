import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectGlobal, setDevice, setCurrentEntity, emptyEntities } from '../store'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ItemListSlidePane from '../components/ItemListSlidePane'
import ItemSlidePane from '../components/ItemSlidePane'
import Map from '../components/Map'

export default function Home() {
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false)
  const [showItemList, setShowItemList] = useState(false)
  const [showItemPage, setShowItemPage] = useState(false)
  const currentEntity = useSelector(selectGlobal('currentEntity'))

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
    setShowItemList(false)
    setShowItemPage(false)
  }
  const handleOnSelectItem = (item) => {
    dispatch(setCurrentEntity(item))
    setShowItemPage(true)
  }
  const handleShowMap = () => {
    setShowItemList(false)
    setShowItemPage(false)
  }
  const handleSearchResultRemove = () => {
    setShowItemList(false)
    setShowItemPage(false)
    dispatch(emptyEntities())
  }

  return (
    <div>
      <Header
        onMenuClick={() => setShowNav(true)}
        onProfileClick={() => setShowItemPage(!showItemPage)}
        showReturnButton={showItemPage}
        onReturnButtonClick={() => setShowItemPage(false)}
        onCrossButtonClick={handleSearchResultRemove}
      />
      <Nav show={showNav} onNavClose={() => setShowNav(false)} />
      <ItemListSlidePane show={showItemList} onSelectItem={handleOnSelectItem} />
      <ItemSlidePane show={showItemPage} data={currentEntity} />
      <Map />
      <Footer
        onFooterPaneClosed={handleFooterPaneClosed}
        showItemList={(open) => setShowItemList(open)}
        showMap={handleShowMap}
      />
    </div>
  )
}
