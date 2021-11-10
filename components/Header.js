import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  setSearchText,
  emptyEntities,
  emptySearchText,
  emptyPopupInfo,
  setShowItemPage,
  setShowItemListPage
} from '../store'
import { fetchScenicSpotByKeyword } from '../store/api/scenicSpotKeyword'

import {FiMenu} from 'react-icons/fi'
import {FaChild} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {BiArrowBack} from 'react-icons/bi'

const Header = ({ onMenuClick, onProfileClick }) => {
  const dispatch = useDispatch()
  const searchText = useSelector(selectGlobal('searchText'))
  const showItemPage = useSelector(selectGlobal('showItemPage'))
  const { isMobile, isTablet, isDesktop } = useSelector(selectGlobal('device'))

  const onChange = (e) => {
    dispatch(setSearchText(e.target.value))
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchScenicSpotByKeyword(searchText))
    }
  }
  const handleArrowBackButtonClick = () => {
    dispatch(setShowItemPage(false))
  }
  const handleCrossButtonClick = () => {
    dispatch(emptySearchText())
    dispatch(emptyPopupInfo())
    dispatch(emptyEntities())
    dispatch(setShowItemPage(false))
    dispatch(setShowItemListPage(false))
  }
  const handleProfileClick = () => {
    // onProfileClick()
  }

  return (
    <header className="header">
      <div className="header-container">

        {showItemPage
          ? <BiArrowBack className="menu-icon" onClick={handleArrowBackButtonClick} />
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
        {isDesktop || ((isMobile || isTablet) && !searchText) ? <div className="profile" onClick={handleProfileClick}><FaChild/></div> : ''}

      </div>
    </header>
  )
}

export default Header