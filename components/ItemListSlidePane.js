import React from 'react';
import { useSelector } from 'react-redux'
import { selectGlobal } from '../store'

import Card from './Card'

import styles from '../styles/SlidePane.module.css'

const ItemListSlidePane = ({ show, onSelectItem }) => {
  const entities = useSelector(selectGlobal('entities'))

  const renderedItems = Object.values(entities).map((entity, i) => (
    <Card key={i} data={entity} onCardClick={onSelectItem} />
  ))

  let classname = `${styles.slidePane} ${styles.posBottom} ${styles.layer1}`
  classname += show ? ` ${styles.posBottomActive}` : ''

  return (
    <div className={classname}>
      {renderedItems}
    </div>
  )
}

export default ItemListSlidePane