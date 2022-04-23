import { ChildrenType } from '../../../types/types';
import * as S from './page-heading.styled';

export default function PageHeading({ children, ...props }: ChildrenType) {

  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}

