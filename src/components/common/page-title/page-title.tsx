import * as S from './page-title.styled';

export default function PageTitle({ children, ...props }: {children: string}) {

  return (
    <S.PageTitle {...props}>{children}</S.PageTitle>
  );
}
