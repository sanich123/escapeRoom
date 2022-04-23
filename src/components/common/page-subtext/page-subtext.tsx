import * as S from './page-subtext.styled';

export default function PageSubtext({ children, ...props }: {children: string}) {

  return (
    <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );
}

