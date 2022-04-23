import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';

import { ModalCloseBtn, ModalCloseLabel } from './modal.styled';

// eslint-disable-next-line react/prop-types
export default function CloseBtn({setIsModalOpen}) {

  return (
    <ModalCloseBtn onClick={() => setIsModalOpen(false)}>
      <IconClose width="16" height="16" />
      <ModalCloseLabel>Закрыть окно</ModalCloseLabel>
    </ModalCloseBtn>
  );
}
