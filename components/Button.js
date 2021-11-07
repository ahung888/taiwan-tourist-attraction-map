import styled from 'styled-components'

export const AreaButton = styled.button`
  font-size: 1.2rem;
  padding: .5rem;
  background-color: #fff;
  border: 1px solid #42b883;
  border-radius: 5px;
  color: #35495e;
  cursor: pointer;

  &.active {
    background-color: rgba(66, 184, 131, .15);
  }
`
export const FooterButton = styled.button`
  font-size: 1rem;
  padding: .2rem .5rem;
  background-color: rgba(66, 184, 131, .15);
  border: 1px solid #42b883;
  border-radius: 5px;
  color: #35495e;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;

  &.active {
    background-color: rgba(66, 184, 131, .15);
  }
`