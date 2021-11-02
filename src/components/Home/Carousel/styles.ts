import styled from 'styled-components';

import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';

interface ArrowProps {
  isSelect: number;
}

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  height: 440px;
  margin: 0 auto;
  padding: 3rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 30%;
  height: 100%;
`;

export const Right = styled.div`
  width: 65%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 2.750rem;
  color: var(--black);
`;

export const Description = styled.p`
  margin: 1.5rem 0;

  font-size: 1.2rem;
  font-weight: normal;
  color: var(--secondary);
`;

export const SlideGallery = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;

  list-style: none;
`;

export const Card = styled.li`
  width: 320px;
  height: 270px;
  padding-left: 2rem;
  
  & + li {
    margin-left: 1rem;
  }

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  flex: none;

  border-radius: 10px;
  background-color: var(--gray-light);
`;

export const CardIcon = styled.div``;

export const CardTitle = styled.span`
  font-size: 2rem;
`;

export const Controls = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--background-primary);
`;

export const ArrowLeft = styled(FaArrowLeft)<ArrowProps>`
  font-size: 1.5rem;
  cursor: pointer;

  opacity: ${(props) => props.isSelect === 1 ? 0 : 1};
`;

export const ArrowRight = styled(FaArrowRight)<ArrowProps>`
  font-size: 1.5rem;
  cursor: pointer;

  opacity: ${(props) => props.isSelect === 4 ? 0 : 1};
`;

export const Pages = styled.div``;

export const PageItem = styled(FaCircle)`
  font-size: 0.6rem;
  cursor: pointer;

  margin-left: 5px;
  opacity: 0.5;

  &:nth-of-type(1) {
    margin-left: 0px;
    opacity: 1;
  }
`;
