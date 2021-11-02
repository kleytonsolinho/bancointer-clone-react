import Button from '../../Global/Form/Button';

import imgSection from '../../../assets/images/inter-enterprise-desktop.png';

import { 
  Container,
  Left,
  Image,
  Right,
  SubTitle,
  Title,
  Description,
  Wrapper,
} from './styles';

export default function Companies() {
  return (
    <Container>
      <Left>
        <SubTitle>Inter Empresas</SubTitle>
        <Title>
          A agilidade e<br /> parceria que o seu<br /> negócio precisa.
        </Title>
        <Description>
          Para você, empreendedor ou gestor que precisa de<br />
          gestão simplificada do seu negócio.
        </Description>
        <Wrapper>
          <Button primary>
            Conhecer a Conta Digital PJ
          </Button>
          <Button>
            Conhecer a Conta Digital MEI
          </Button>
        </Wrapper>
      </Left>
      <Right>
        <Image src={imgSection} alt="Imagem aplicativo do banco" />
      </Right>
    </Container>
  );
}