import styled from 'styled-components'
import viewIcon from '../../assets/icon-view.svg';

export const PreviewCardContainer = styled.main`
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
`
export const PreviewCardBody = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme['dark-blue-card']};
  border-radius: 16px;
  padding: 1.5rem;
  padding-bottom: 2rem;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media only screen and (max-width: 400px) {
    width: 327px;
  }
`

export const ProductImage = styled.div`
  background: ${props => props.theme.cyan};
  background-image: url(${viewIcon});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
  width: 100%;
  border-radius: inherit;
  opacity: 1;
  transition: .5s;
  }

  img:hover {
    opacity: .5;
    cursor: pointer;
  }
`

export const Title = styled.div`
  font-weight: 600;
  font-size: ${props => props.theme.text[22]};
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  transition: .5s;

  :hover {
    color: ${props => props.theme.cyan};
    cursor: pointer;
  }
`

export const Description = styled.p`
  font-size: ${props => props.theme.text[18]};
  font-weight: 300;
  flex-wrap: wrap;
  line-height: 1.625rem;
  margin-bottom: 1.375rem;
  color: ${props => props.theme['soft-blue']};

  @media only screen and (max-width: 400px) {
    font-size: ${props => props.theme.text[16]};
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValueContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${props => props.theme.cyan};
  font-size: ${props => props.theme.text[16]};
  letter-spacing: 0.01em;
  font-weight: 600;

  @media only screen and (max-width: 400px) {
    font-size: ${props => props.theme.text[15]};
  }
`

export const DateContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: ${props => props.theme.text[16]};
  color: ${props => props.theme['soft-blue']};

  @media only screen and (max-width: 400px) {
    font-size: ${props => props.theme.text[15]};
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.625rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme['dark-blue-line']};
`

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border: 1px solid white;
  border-radius: 50%;
`

export const ProfileName = styled.div`
  font-size: ${props => props.theme.text[16]};
  color: ${props => props.theme['soft-blue']};

  span {
  color: ${props => props.theme.white};
  transition: .5s;

  :hover {
    color: ${props => props.theme.cyan};
    cursor: pointer;
  }

  @media only screen and (max-width: 400px) {
    font-size: ${props => props.theme.text[15]};
  }
}

`