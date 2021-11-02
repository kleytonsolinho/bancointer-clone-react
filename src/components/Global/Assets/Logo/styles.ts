import styled from 'styled-components';

interface SvgProps {
  color?: string;
  scrolled: boolean;
}

export const Svg = styled.svg<SvgProps>`
  width: 109.00000762939453;
  height: 41;

  fill: ${(props) => props.scrolled ? 'var(--white)' : 'var(--primary)'};
`;
