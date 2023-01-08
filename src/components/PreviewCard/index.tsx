import { Avatar, DateContainer, Description, Details, PreviewCardBody, PreviewCardContainer, ProductImage, ProfileContainer, ProfileName, Title, ValueContainer } from "./styles";
import mainImage from '../../assets/image-equilibrium.jpg';
import avatar from '../../assets/image-avatar.png';
import { Clock, CurrencyEth } from 'phosphor-react';

export function PreviewCard() {
  return(
    <PreviewCardContainer>
      <PreviewCardBody>
      <ProductImage>
        <img src={mainImage} alt="" />
      </ProductImage>
      <Title>Equilibrium #3429</Title>
      <Description>Our Equilibrium collection promotes  balance and calm.</Description>
      <Details>
        <ValueContainer>
        <CurrencyEth color= '#00FFF6' size={20} weight="fill" />
          0.041 ETH 
        </ValueContainer>
        <DateContainer>
        <Clock size={15} weight="fill" />
          3 days left
        </DateContainer>
      </Details>
      <ProfileContainer>
      <Avatar src={avatar} alt="avatar" />
      <ProfileName>Creation of <span>Jules Wyvern</span></ProfileName>
      </ProfileContainer>
      </PreviewCardBody>
    </PreviewCardContainer>
  )
}