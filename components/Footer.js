import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectGlobal } from '../store'

import FooterPane from './FooterPane'
import { FooterButton } from './Button'

import { MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { GrMap } from 'react-icons/gr'

const Footer = ({ onFooterPaneClosed, showItemList, showMap }) => {
  const entities = useSelector(selectGlobal('entities'))
  const [showPane, setShowPane] = useState(false)
  const [showListButton, setShowListButton] = useState(true)
  
  const data = Object.values(entities)

  const handleListButtonClick = () => {
    setShowListButton(false)
    showItemList(showListButton)
  }
  const handleMapButtonClick = () => {
    setShowListButton(true)
    showMap()
  }
  const handleFooterPaneClosed = () => {
    setShowPane(false)
    onFooterPaneClosed()
  }

  const listButton = <FooterButton onClick={handleListButtonClick}><AiOutlineBars/>查看清單</FooterButton>
  const mapButton = <FooterButton onClick={handleMapButtonClick}><GrMap/>查看地圖</FooterButton>
  const renderedButton = showListButton ? listButton : mapButton

  return (
    <>
      <footer className="footer">
        <div className="flex">
          <div className="icon" onClick={() => setShowPane(true)}>
            <MdKeyboardArrowUp size="1.5rem" />
          </div>
          <p onClick={() => setShowPane(true)}>快速查詢</p>
        </div>
        <div className="flex">
          {data.length > 0 ? renderedButton : ''}
        </div>
      </footer>

      <FooterPane
        active={showPane}
        onClose={handleFooterPaneClosed}
      />
    </>
  )
}

export default Footer