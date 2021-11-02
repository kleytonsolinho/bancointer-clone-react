import Button from '../../Global/Form/Button';

import imgSection from '../../../assets/images/emprestimos-e-finaciamentos-home-desktop.png';

import { 
  Container,
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
      <Left>
        <SubTitle>Empréstimos e Financiamento</SubTitle>
        <Title>
          Opções de crédito<br /> feitas para você.
        </Title>
        <Description>
          Do empréstimo pessoal ao financiamento<br /> 
          da sua casa, descomplicamos o seu<br /> 
          crédito com um jeito simples de simular e<br /> 
          contratar e taxas que você pode pagar.
        </Description>
        <Button primary>
          Simular meu Empréstimo
        </Button>
      </Left>
      <Right>
        <Image src={imgSection} alt="Imagem aplicativo do banco" />
      </Right>
    </Container>
  );
}