import { EvtType } from '../../../../../types/types';
import { BookingField, BookingLabel, BookingInput } from '../modal.styled';
interface PhoneInputProps {
  phone: string,
  setPhone: (arg: string) => void,
}
export default function PhoneInput({phone, setPhone}: PhoneInputProps) {

  return (
    <BookingField>
      <BookingLabel htmlFor="booking-phone">
            Контактный телефон
      </BookingLabel>
      <BookingInput
        onChange={({target}: EvtType) => setPhone(target.value)}
        value={phone}
        type="tel"
        id="booking-phone"
        name="booking-phone"
        placeholder="Телефон"
        required
      />
    </BookingField>
  );
}
