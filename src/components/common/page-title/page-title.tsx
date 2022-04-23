import { ChildrenType } from '../../../types/types';
import * as S from './page-title.styled';

export default function PageTitle({ children, ...props }: ChildrenType) {

  return (
    <S.PageTitle {...props}>{children}</S.PageTitle>
  );
}
