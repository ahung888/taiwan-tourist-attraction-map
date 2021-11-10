import styled from 'styled-components'

export const AreaButton = styled.button`
  font-size: 1.2rem;
  padding: .5rem;
  background-color: #fff;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  color: #35495e;
  cursor: pointer;

  &.active {
    background-color: var(--primary-background-color);
  }
`
export const FooterButton = styled.button`
  font-size: 1rem;
  padding: .2rem .5rem;
  background-color: var(--primary-background-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  color: #35495e;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;

  &.active {
    background-color: var(--primary-background-color);
  }
`