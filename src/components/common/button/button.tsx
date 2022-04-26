import { ChildrenType } from '../../../types/types';
import * as S from './button.styled';

export default function Button({ children, ...props }: ChildrenType) {
  return (
    <S.Button {...props}>{children}</S.Button>
  );
}

