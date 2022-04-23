import { ChildrenType } from '../../../types/types';
import * as S from './container.styled';

export default function Container({ children, ...props }: ChildrenType) {
  return (
    <S.Container {...props}>{children}</S.Container>
  );
}

