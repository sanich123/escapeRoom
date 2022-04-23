import React from 'react';
import { BookingField, BookingLabel, BookingInput } from '../modal.styled';

interface AmountInputProps {
  participants: string,
  setParticipants: (arg: string) => void,
}

export default function AmountParticipantsInput({participants, setParticipants}: AmountInputProps) {

  return (
    <BookingField>
      <BookingLabel htmlFor="booking-people">
            Количество участников
      </BookingLabel>
      <BookingInput
        onChange={({target}: {target: {value: string}}): void => setParticipants(target.value)}
        value={participants}
        type="number"
        id="booking-people"
        name="booking-people"
        placeholder="Количество участников"
        required
      />
    </BookingField>
  );
}
