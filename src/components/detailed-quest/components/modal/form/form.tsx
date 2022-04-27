import { BookingForm } from '../modal.styled';
import NameInput from './name-input';
import PhoneInput from './phone-input';
import AmountParticipantsInput from './amount-participants';
import SubmitBtn from './submit-btn';
import React, { useEffect } from 'react';
import AgreeCheckbox from './agree-checkbox';
import { toast } from 'react-toastify';
import { useForm } from '../../../../../hooks/useForm';
import { useAddOrderMutation } from '../../../../../redux/quests-api';
import { errorHandler } from '../../../../../utils/utils';
import { messages } from '../../../../../utils/const';

export default function Form({setIsModalOpen}: { setIsModalOpen: (arg: boolean) => void }) {
  const {name, phone, participants, agreed, setName, setPhone, setParticipants, setIsAgreed} = useForm();
  const [addOrder, {isSuccess, error}] = useAddOrderMutation();

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    await addOrder({ name, peopleCount: Number(participants), phone, isLegal: agreed }).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(messages.success);
      setIsModalOpen(false);
    }
    if (error) {
      errorHandler(error);
    }
  }, [isSuccess, setIsModalOpen, error]);

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
