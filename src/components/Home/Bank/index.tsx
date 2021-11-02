import imgApp from '../../../assets/images/inter-bank-home-desktop.png';

import { 
  Container,
  Left,
  Image,
  Right,
  SubTitle,
  Title,
  Description,
} from './styles';

export default function Bank() {
  return (
    <Container>
      <Left>
        <Image src={imgApp} alt="Imagem aplicativo do banco" />
      </Left>
      <Right>
        <SubTitle>Inter Bank</SubTitle>
        <Title>
          Diferente, sem pegadinhas e sem tarifas: como você sempre quis.
        </Title>
        <Description>
          Planeje e invista no futuro do seu filho com a <span>Conta Kids</span> ou abra uma  
          <span>Conta Digital</span> 100% isenta de tarifas e com tudo que você precisa.
        </Description>
      </Right>
    </Container>
  );
}