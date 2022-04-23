import { FocusOn } from 'react-focus-on';
import CloseBtn from './close-btn';
import Form from './form/form';
import { BlockLayer, Modal, ModalTitle } from './modal.styled';

export default function BookingModal({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {

  return (
    <BlockLayer>
      <FocusOn
        onClickOutside={() => setIsModalOpen(false)}
        onEscapeKey={() => setIsModalOpen(false)}
      >
        <Modal>
          <CloseBtn setIsModalOpen={setIsModalOpen}/>
          <ModalTitle>Оставить заявку</ModalTitle>
          <Form setIsModalOpen={setIsModalOpen}/>
        </Modal>
      </FocusOn>
    </BlockLayer>
  );}
