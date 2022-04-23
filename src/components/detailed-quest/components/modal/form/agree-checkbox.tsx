import { BookingCheckboxInput, BookingCheckboxWrapper, BookingCheckboxLabel, BookingCheckboxText, BookingLegalLink } from '../modal.styled';

interface AgreeCheckboxProps {
  agreed: boolean,
  setIsAgreed: (arg: boolean) => void
}

export default function AgreeCheckbox({agreed, setIsAgreed}: AgreeCheckboxProps) {

  return (
    <BookingCheckboxWrapper>
      <BookingCheckboxInput
        onChange={() => setIsAgreed(!agreed)}
        checked={agreed}
        type="checkbox"
        id="booking-legal"
        name="booking-legal"
        required
      />
      <BookingCheckboxLabel
        className="checkbox-label"
        htmlFor="booking-legal"
      >
        <BookingCheckboxText>
              Я согласен с{' '}
          <BookingLegalLink
            href="https://rg.ru/2006/07/29/personaljnye-dannye-dok.html"
            target="blank_"
          >
                правилами обработки персональных данных и пользовательским
                соглашением
          </BookingLegalLink>
        </BookingCheckboxText>
      </BookingCheckboxLabel>
    </BookingCheckboxWrapper>
  );
}
