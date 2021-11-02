import { useState, useEffect, useRef } from 'react';

import Button from '../../Global/Form/Button';

import carouselData from '../../../data/carousel';

import { 
  Container,
  Left,
  Right,
  Title,
  Description,
  SlideGallery,
  Card,
  CardIcon,
  CardTitle,
  Controls,
  ArrowLeft,
  ArrowRight,
  Pages,
  PageItem,
} from './styles';

export default function Carousel() {
  const carousel = useRef<HTMLUListElement>(null);
  const [isSelect, setIsSelect] = useState(1);

  function handleLeftClick(): void {
    if(isSelect === 1) {
      return;
    }

    if(carousel.current !== null) {
      carousel.current.scrollLeft -= 336;
      setIsSelect((oldState) => oldState - 1);
    }
  }

  function handleRightClick(): void {
    if(isSelect === 4) {
      return;
    }

    if(carousel.current !== null) {
      carousel.current.scrollLeft += 336;
      setIsSelect((oldState) => oldState + 1);
    }
  }

  useEffect(() => {
    console.log(isSelect);
  }, [isSelect])

  return (
    <Container>
      <Left>
        <Title>
          Você muda para o Super App do Inter e para de mudar de aplicativo.
        </Title>
        <Description>
          Quem tem conta no Inter tem soluções completas para todos os momentos.
        </Description>
        <Button primary>
          Quero ser Inter
        </Button>
      </Left>
      <Right>
        <SlideGallery ref={carousel}>
          {carouselData.map(item => 
            <Card key={item.id}>
              <CardIcon><img src={item.icon} alt="" /></CardIcon>
              <CardTitle>{item.category}</CardTitle>
            </Card>
          )}
        </SlideGallery>
        <Controls>
          <ArrowLeft onClick={() => handleLeftClick()} isSelect={isSelect} />
          <Pages>
            <PageItem />
            <PageItem />
            <PageItem />
            <PageItem />
          </Pages>
          <ArrowRight onClick={() => handleRightClick()} isSelect={isSelect} />
        </Controls>
      </Right>
    </Container>
  );
}