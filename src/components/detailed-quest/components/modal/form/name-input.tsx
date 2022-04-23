import { EvtType } from '../../../../../types/types';
import { BookingField, BookingInput, BookingLabel } from '../modal.styled';

interface NameInputProps {
  name: string,
  setName: (arg: string) => void,
}
export default function NameInput({name, setName}: NameInputProps) {

  return (
    <BookingField>
      <BookingLabel htmlFor="booking-name">Ваше Имя</BookingLabel>
      <BookingInput
        onChange={({target}: EvtType) => setName(target.value)}
        value={name}
        type="text"
        id="booking-name"
        name="booking-name"
        placeholder="Имя"
        required
      />
    </BookingField>
  );
}
