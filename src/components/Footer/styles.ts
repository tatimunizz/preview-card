import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: auto;
  font-size: ${props => props.theme.text[16]};
  color: ${props => props.theme['soft-blue']};
  flex-shrink: 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.text[16]};
  transition: .5s;

  :hover {
  color: ${props => props.theme.cyan};
  }
`