import videoBanner from '../../assets/videos/banner.mp4';

import { Container } from './styles';

export default function Banner() {
  return (
    <Container>
      <video autoPlay muted loop>
        <source src={videoBanner} type="video/mp4" />
      </video>
    </Container>
  );
}