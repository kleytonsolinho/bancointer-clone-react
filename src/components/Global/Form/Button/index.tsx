import { ReactElement } from 'react';

import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  primary?: boolean;
  icon?: ReactElement;
}

export default function Button({ 
  children, 
  primary, 
  icon, 
  ...rest }: ButtonProps) {
  return (
    <Container isPrimary={primary} {...rest}>
      {children}{icon}
    </Container>
  );
}