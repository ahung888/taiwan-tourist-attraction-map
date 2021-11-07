import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  setSearchText,
  emptySearchText,
  emptyPopupInfo
} from '../store'
import { fetchScenicSpotByKeyword } from '../store/api'

import {FiMenu} from 'react-icons/fi'
import {FaChild} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {BiArrowBack} from 'react-icons/bi'

const Header = ({ onMenuClick, onProfileClick, showReturnButton, onReturnButtonClick, onCrossButtonClick }) => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectGlobal('searchText'))
  const { isMobile, isTablet, isDesktop } = useSelector(selectGlobal('device'))

  const onChange = (e) => {
    dispatch(setSearchText(e.target.value))
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchScenicSpotByKeyword(searchText))
    }
  }
  const handleCrossButtonClick = () => {
    dispatch(emptySearchText())
    dispatch(emptyPopupInfo())
    onCrossButtonClick()
  }

  return (
    <header className="header">
      <div className="header-container">

        {showReturnButton
          ? <BiArrowBack className="menu-icon" onClick={onReturnButtonClick} />
          : <FiMenu className="menu-icon" onClick={onMenuClick} />
        }

        <div className="slot left">
          <input
            className="search-input"
            type="text"
            placeholder="尋找旅遊景點"
            value={searchText}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>

        {searchText ? <ImCross className="menu-icon" size="1.5rem" color="#999" onClick={handleCrossButtonClick} /> : ''}
        {isDesktop || ((isMobile || isTablet) && !searchText) ? <div className="profile" onClick={onProfileClick}><FaChild/></div> : ''}

      </div>
    </header>
  )
}

export default Header