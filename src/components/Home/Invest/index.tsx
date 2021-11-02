import Button from '../../Global/Form/Button';

import imgSection from '../../../assets/images/inter-invest-home-desktop.png';

import { 
  Container,
  Left,
  Image,
  Right,
  SubTitle,
  Title,
  Description,
} from './styles';

export default function Invest() {
  return (
    <Container>
      <Left>
        <SubTitle>Inter Invest</SubTitle>
        <Title>
        Seu dinheiro, suas<br /> escolhas. Invista do<br/> seu jeito!
        </Title>
        <Description>
          Praticidade e segurança. Conheça a Inter Invest,<br/>
          nossa plataforma unificada de investimentos.
        </Description>
        <Button primary>
          Começar a Investir
        </Button>
      </Left>
      <Right>
        <Image src={imgSection} alt="Imagem aplicativo do banco" />
      </Right>
    </Container>
  );
}