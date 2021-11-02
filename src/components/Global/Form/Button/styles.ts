import { ReactElement } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isPrimary?: boolean;
  icon?: ReactElement;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  max-width: ${(props) => props.icon ? '260px' : '360px'};
  height: 46px;

  padding: ${(props) => props.icon ? '0 5rem' : '0px'};

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.icon ? 'space-between' : 'center'};

  font-weight: bold;
  border-radius: 8px;

  border: 
    ${(props) => props.isPrimary ? 
      'none' 
    : 
      '2px solid var(--primary)'
    };

  color: 
    ${(props) => props.isPrimary ? 
      'var(--white)' 
    : 
      'var(--primary)'
    };

  background-color: 
    ${(props) => props.isPrimary ? 
      'var(--background-primary)' 
    : 
      'var(--white)'
    };

  &:hover {
    filter: brightness(1.1);
  }
`;
