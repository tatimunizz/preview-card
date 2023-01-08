import styled from 'styled-components'

export const PageContainer = styled.div`
  background: ${props => props.theme.background};
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`
