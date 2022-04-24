import { ModalCloseBtn, ModalCloseLabel } from './modal.styled';
import { IconClose } from '../../../svg/svg';

export default function CloseBtn({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {

  return (
    <ModalCloseBtn onClick={() => setIsModalOpen(false)}>
      <IconClose width="16" height="16" />
      <ModalCloseLabel>Закрыть окно</ModalCloseLabel>
    </ModalCloseBtn>
  );
}
