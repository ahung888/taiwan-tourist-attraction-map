import * as React from 'react';
import styles from '../styles/SpotInfo.module.css'

function CityInfo(props) {
  const {info} = props;
  const imgSrc = info?.Picture?.PictureUrl1
  const imgAlt = info?.Picture?.PictureDescription1

  const displayName = `${info.ScenicSpotName}, ${info.City}`;
  const displayImage = imgSrc ? <img className={styles.img} src={imgSrc} alt={imgAlt} /> : ''

  return (
    <div className={styles.wrapper}>
      <div className="title">{displayName}</div>
      <div className="thumbnail">{displayImage}</div>
    </div>
  );
}

export default React.memo(CityInfo);
