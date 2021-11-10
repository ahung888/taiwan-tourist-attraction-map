import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGlobal,
  setStatusRendered,
  setPopupInfo,
  setCurrentEntity,
  emptyPopupInfo,
  setShowItemPage
} from '../store'
import MapGL, {
  Popup,
  FlyToInterpolator
} from 'react-map-gl'

import Pins from './Pins'
import SpotInfo from './SpotInfo';
import { HOME_POS } from '../store/position'
import { center, zoomLevel } from '../utils/positionHelper'

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

const Map = ({  }) => {
  const dispatch = useDispatch()
  const { isMobile } = useSelector(selectGlobal('device'))
  const entities = useSelector(selectGlobal('entities'))
  const status = useSelector(selectGlobal('status'))
  const popupInfo = useSelector(selectGlobal('popupInfo'))
  const showItemPage = useSelector(selectGlobal('showItemPage'))
  const showItemListPage = useSelector(selectGlobal('showItemListPage'))
  const [viewport, setViewport] = useState({
    latitude: HOME_POS.TAIWAN[0],
    longitude: HOME_POS.TAIWAN[1],
    zoom: 6.5,
    bearing: 0,
    pitch: 0
  });
  const offsetLongitude = isMobile ? -0.015 : 0;

  const data = Object.values(entities)

  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener('flytospot', flyToEntity)
      return () => document.removeEventListener('flytospot', flyToEntity)
    }
  }, [])

  const onSelectEntity = useCallback(({ Position: { PositionLon = 0, PositionLat = 0 } }) => {
    if (PositionLon === 0 || PositionLat === 0) return
    setViewport({
      latitude: PositionLat,
      longitude: PositionLon,
      zoom: zoomLevel.spot,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    });
  }, []);

  const flyToEntity = ({ entity }) => {
    if (entity === undefined) return

    const { Position: { PositionLon = 0, PositionLat = 0 } } = entity
    if (PositionLon === 0 || PositionLat === 0) return

    setViewport({
      latitude: PositionLat,
      longitude: PositionLon + offsetLongitude,
      zoom: zoomLevel.spot,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    });

    dispatch(setPopupInfo(entity))
  }

  const flyToEntitiesCenter = () => {
    if (data.length > 0) {
      setViewport({
        ...center(data),
        zoom: zoomLevel.area,
        transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
        transitionDuration: 'auto'
      });
    }
  }

  const handlePinClicked = (entity) => {
    onSelectEntity(entity)
    dispatch(setCurrentEntity(entity))
    dispatch(setPopupInfo(entity))
    dispatch(setShowItemPage(true))
  }
  const handleEmptyPopupInfo = () => {
    dispatch(emptyPopupInfo())
  }

  const handleOnViewportChange = (viewport) => {
    const {width, height, ...etc} = viewport
    setViewport(etc)
  }

  if (status === 'loaded' && data.length > 0) {
    setTimeout(() => flyToEntitiesCenter(), 500)
    dispatch(setStatusRendered())
  }

  const resize = showItemPage || showItemListPage
  const mapClassname = `map ${resize ? 'showItemPages' : ''}`

  return (
    <div className={mapClassname}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        // mapStyle="mapbox://styles/mapbox/light-v9"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => handleOnViewportChange(viewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onClick={() => document.dispatchEvent(new Event("onmapclick"))}
      >
        <Pins data={data} onClick={handlePinClicked} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo?.Position?.PositionLon || 0}
            latitude={popupInfo?.Position?.PositionLat || 0}
            closeOnClick={false}
            onClose={handleEmptyPopupInfo}
          >
            <SpotInfo info={popupInfo} />
          </Popup>
        )}
      </MapGL>
    </div>
  )
}

export default Map

export const showEntity = (entity) => {
  let event = new Event("flytospot")
  event.entity = entity
  document.dispatchEvent(event)
}