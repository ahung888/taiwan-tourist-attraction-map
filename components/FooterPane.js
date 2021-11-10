import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux'
import { setSearchText } from '../store'
import { ApiContext } from '../store/api'

import { AreaButton } from './Button'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AREAS, LOCATIONS } from '../store/filterOptions'
import styled from 'styled-components'

const Wrapper = styled.footer`
  bottom: 0;
  height: 60vh;
  transition: bottom 0.26s ease;
  z-index: 500;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -2px 2px 0 rgb(0 0 0 / 15%);

  &.hide {
    bottom: -60vh;
    box-shadow: none;
  }
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: .5rem;
`
const Title = styled.div`
  color: #333;
  font-weight: 700;
  margin: 1rem 0 .5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
`

const SubmitButton = styled.button`
  width: 8rem;
  font-size: 1rem;
  padding: .5rem;
  background-color: var(--primary-background-color);
  border: 1px solid var(--primary-color);
  color: #35495e;
  cursor: pointer;
`
const SectionBottom = styled.div`
  position: absolute;
  bottom: .5rem;
`
const CloseButton = styled.div`
  position: absolute;
  top: .5rem;
  right: .5rem;
  color: var(--primary-color);
`

const FooterPane = ({ active, onClose }) => {
  const dispatch = useDispatch()
  const api = useContext(ApiContext)
  const [selectedArea, setSelectedArea] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  
  const renderedAreas = AREAS.map((area, idx) => {
    const handleAreaButtonClick = () => {
      setSelectedArea(idx)
      setSelectedLocation(null)
    }
    return (
      <AreaButton
        className={`area ${idx === selectedArea ? 'active' : ''}`}
        key={idx}
        onClick={handleAreaButtonClick}
      >{area.name}</AreaButton>
    )
  })

  const locations = selectedArea !== null ? AREAS[selectedArea].locations : []
  const renderedLocations = locations.map((location, idx) => (
    <AreaButton
      className={`location ${location === selectedLocation ? 'active' : ''}`}
      key={idx}
      onClick={() => handleLocationSelected(location)}
    >{LOCATIONS[location]}</AreaButton>
  ))

  const handleLocationSelected = (location) => {
    setSelectedLocation(location)
  }

  const handleClose = () => {
    setSelectedArea(null)
    setSelectedLocation(null)
    onClose()
  }

  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener('onmapclick', handleClose)
      return () => document.removeEventListener('onmapclick', handleClose)
    }
  }, [])

  const handleSubmit = () => {
    if (selectedLocation !== null) {
      api.set(selectedLocation)
      dispatch(api.get()())
      dispatch(setSearchText(LOCATIONS[selectedLocation]))
      handleClose()
    } else {
      // console.log("didn't select location")
    }
  }

  return (
    <Wrapper className={`footer footer-pane ${active ? '' : 'hide'}`}>
      <CloseButton onClick={handleClose}><AiOutlineCloseCircle size="1.5rem" /></CloseButton>

      <Section className="locations">
        <Title>區域</Title>
        <ButtonContainer className="areas">{renderedAreas}</ButtonContainer>
        {selectedArea !== null ? <Title>縣市</Title> : <></>}
        <ButtonContainer className="locations">{renderedLocations}</ButtonContainer>
      </Section>

      <SectionBottom>
        <SubmitButton onClick={handleSubmit}>查詢</SubmitButton>
      </SectionBottom>
    </Wrapper>
  )
}

export default FooterPane