import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGlobal, setShowItemListPage, setShowItemPage } from '../store'

import FooterPane from './FooterPane'
import { FooterButton } from './Button'

import { MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { GrMap } from 'react-icons/gr'

const Footer = () => {
  const dispatch = useDispatch()
  const entities = useSelector(selectGlobal('entities'))
  const showItemListPage = useSelector(selectGlobal('showItemListPage'))
  const [showPane, setShowPane] = useState(false)
  
  const data = Object.values(entities)

  const hideItemPages = () => {
    dispatch(setShowItemListPage(false))
    dispatch(setShowItemPage(false))
  }
  const handleListButtonClick = (e) => {
    e.stopPropagation()
    dispatch(setShowItemListPage(true))
    dispatch(setShowItemPage(false))
  }
  const handleMapButtonClick = (e) => {
    e.stopPropagation()
    hideItemPages()
  }
  const handleFooterPaneClosed = () => {
    setShowPane(false)
  }
  const handleFooterClicked = (e) => {
    setShowPane(true)
  }

  const listButton = <FooterButton onClick={handleListButtonClick}><AiOutlineBars/>查看清單</FooterButton>
  const mapButton = <FooterButton onClick={handleMapButtonClick}><GrMap/>查看地圖</FooterButton>
  const renderedButton = showItemListPage ? mapButton : listButton

  return (
    <>
      <footer className="footer" onClick={handleFooterClicked}>
        <div className="flex">
          <div className="icon">
            <MdKeyboardArrowUp size="1.5rem" />
          </div>
          <p className="text-unselectable">快速查詢</p>
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