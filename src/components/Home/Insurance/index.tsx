import Button from '../../Global/Form/Button';

import imgSection from '../../../assets/images/inter-seguros-home-desktop.png';

import { 
  Container,
  Content,
  Left,
  Image,
  Right,
  SubTitle,
  Title,
  Description,
} from './styles';

export default function Financing() {
  return (
    <Container>
      <Content>
        <Left>
          <Image src={imgSection} alt="Imagem aplicativo do banco" />
        </Left>
        <Right>
          <SubTitle>Inter Seguros</SubTitle>
          <Title>
            O seguro ideal, pra<br /> você proteger o que<br/> realmente importa.
          </Title>
          <Description>
            Uma plataforma com opções de seguros<br />
            para o seu momento, com várias<br />
            modalidades, pra você, sua família e sua<br />
            empresa.
          </Description>
          <Button primary>
            Conhecer a Inter Seguros
          </Button>
        </Right>
      </Content>
    </Container>
  );
}