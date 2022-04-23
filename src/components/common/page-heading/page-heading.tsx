import * as S from './page-heading.styled';

export default function PageHeading({ children, ...props }: {children: string}) {
  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}

