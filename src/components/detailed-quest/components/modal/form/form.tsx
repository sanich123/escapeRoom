import { BookingForm } from '../modal.styled';
import NameInput from './name-input';
import PhoneInput from './phone-input';
import AmountParticipantsInput from './amount-participants';
import SubmitBtn from './submit-btn';
import React, { useState, useEffect } from 'react';
import AgreeCheckbox from './agree-checkbox';
import { toast } from 'react-toastify';
interface FormProps {
  setIsModalOpen: (arg: boolean) => void,
}
export default function Form({setIsModalOpen}: FormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [participants, setParticipants] = useState('');
  const [agreed, setIsAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    const response = await (await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        peopleCount: Number(participants),
        phone,
        isLegal: agreed
      }),
    })).json();
    if (response === 201) {
      toast.warn('Данные успешно отправлены');
      setIsSuccess(true);
    } else {
      toast.warn(response.messages.join(''));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
    }
  }, [isSuccess, setIsModalOpen]);

  return (
    <BookingForm
      action="https://echo.htmlacademy.ru"
      method="post"
      id="booking-form"
      onSubmit={handleSubmit}
    >
      <NameInput name={name} setName={setName}/>
      <PhoneInput phone={phone} setPhone={setPhone}/>
      <AmountParticipantsInput participants={participants} setParticipants={setParticipants}/>
      <AgreeCheckbox agreed={agreed} setIsAgreed={setIsAgreed}/>
      <SubmitBtn/>

    </BookingForm>
  );
}
