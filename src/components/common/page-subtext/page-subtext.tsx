import { ChildrenType } from '../../../types/types';
import * as S from './page-subtext.styled';

export default function PageSubtext({ children, ...props }: ChildrenType) {

  return (
    <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );
}

