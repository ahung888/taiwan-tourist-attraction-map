import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setDevice } from '../store'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ItemListSlidePane from '../components/ItemListSlidePane'
import ItemSlidePane from '../components/ItemSlidePane'
import Map from '../components/Map'

export default function Home() {
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false)

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

  return (
    <div>
      <Header
        onMenuClick={() => setShowNav(true)}
        onProfileClick={() => {}}
      />
      <Nav show={showNav} onNavClose={() => setShowNav(false)} />
      <ItemListSlidePane />
      <ItemSlidePane />
      <Map />
      <Footer />
    </div>
  )
}
