import videoBanner from '../../../assets/videos/banner.mp4';

import { 
  Container,
  Overlay,
  Button,
  IconPlay,
  Title,
} from './styles';

export default function Banner() {
  return (
    <Container>
      <Overlay>
        <Button>
          <IconPlay />
        </Button>
        <Title>
          Mais que um banco, um Super App que simplifica a sua vida.
        </Title>
      </Overlay>
      <video autoPlay muted loop>
        <source src={videoBanner} type="video/mp4" />
      </video>
    </Container>
  );
}