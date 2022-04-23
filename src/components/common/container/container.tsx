import * as S from './container.styled';

export default function Container({ children, ...props }: {children: string}) {
  return (
    <S.Container {...props}>{children}</S.Container>
  );
}

