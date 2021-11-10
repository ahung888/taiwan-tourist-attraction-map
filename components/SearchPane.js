import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  emptySplashMessage
} from '../store'
import styles from '../styles/SlidePane.module.css'

const SearchPane = () => {
  const dispatch = useDispatch()
  const splashMessage = useSelector(selectGlobal('splashMessage'))
  
  useEffect(() => {
    if (splashMessage !== null) {
      setTimeout(() => dispatch(emptySplashMessage()), 2000)
    }
  }, [splashMessage])

  let classname = `${styles.slidePane} ${styles.slidePaneSearch} ${styles.posTop} ${styles.layer3}`
  classname += splashMessage ? ` ${styles.posTopActive}` : ''

  return (
    <div className={classname} id="search page">
      {splashMessage}
    </div>
  )
}

export default SearchPane