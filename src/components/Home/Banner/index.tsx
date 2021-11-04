import { useState } from 'react';

import { FaRegTimesCircle } from 'react-icons/fa';

import videoBanner from '../../../assets/videos/banner.mp4';

import { 
  Container,
  Overlay,
  Button,
  IconPlay,
  Title,
  ShadowLayer,
  Modal,
  Close,
} from './styles';

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Overlay>
        <Button onClick={handleOpenModal}>
          <IconPlay />
        </Button>
        <Title>
          Mais que um banco, um Super App que simplifica a sua vida.
        </Title>
      </Overlay>
      <ShadowLayer />
      <video autoPlay muted loop>
        <source src={videoBanner} type="video/mp4" />
      </video>
      {isOpen && 
        <Modal onClick={() => handleOpenModal()}>
          <Close onClick={() => handleOpenModal()}>
            <FaRegTimesCircle />
          </Close>
          <iframe src="https://www.youtube.com/embed/vgv65UTp2lQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </Modal>
      }
    </Container>
  );
}