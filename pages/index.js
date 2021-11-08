import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setDevice, emptyEntities } from '../store'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ItemListSlidePane from '../components/ItemListSlidePane'
import ItemSlidePane from '../components/ItemSlidePane'
import Map from '../components/Map'
import { gaScript } from '../utils/ga'

export default function Home() {
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false)
  const [showItemList, setShowItemList] = useState(false)
  const [showItemPage, setShowItemPage] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

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
    setSelectedItem(item)
    setShowItemPage(true)
  }
  const handleShowMap = () => {
    setShowItemList(false)
    setShowItemPage(false)
  }
  const handleSearchResultRemove = () => {
    setShowItemList(false)
    setShowItemPage(false)
    setSelectedItem(null)
    dispatch(emptyEntities())
  }

  return (
    <div>
      <Head>
        <title>台灣旅遊景點導覽地圖</title>
        <meta name="description" content="台灣旅遊景點導覽地圖" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script>{gaScript}</script>
      </Head>

      <Header
        onMenuClick={() => setShowNav(true)}
        onProfileClick={() => setShowItemPage(!showItemPage)}
        showReturnButton={showItemPage}
        onReturnButtonClick={() => setShowItemPage(false)}
        onCrossButtonClick={handleSearchResultRemove}
      />
      <Nav show={showNav} onNavClose={() => setShowNav(false)} />
      <ItemListSlidePane show={showItemList} onSelectItem={handleOnSelectItem} />
      <ItemSlidePane show={showItemPage} data={selectedItem} />
      <Map />
      <Footer
        onFooterPaneClosed={handleFooterPaneClosed}
        showItemList={(open) => setShowItemList(open)}
        showMap={handleShowMap}
      />
    </div>
  )
}
