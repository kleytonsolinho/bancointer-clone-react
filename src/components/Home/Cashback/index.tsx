import { FaArrowRight } from 'react-icons/fa';

import Button from '../../Global/Form/Button';

import { 
  Container,
  Content,
  Title,
  Amount,
  SubTitle,
} from './styles';

export default function Cashback() {
  return (
    <Container>
      <Content>
        <Title>O Inter já devolveu tudo isso de cashback:</Title>
        <Amount><span>R$</span> 239.897.458,88</Amount>
        <SubTitle>Quer ganhar cashback também? Clique abaixo e saiba como:</SubTitle>
        <Button icon={<FaArrowRight />}>
          Como ganhar cashback
        </Button>
      </Content>
    </Container>
  );
}