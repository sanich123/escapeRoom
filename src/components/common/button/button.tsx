import React from 'react';
import * as S from './button.styled';

export default function Button({ children, ...props }: {children: string}) {
  return (
    <S.Button {...props}>{children}</S.Button>
  );
}

