import { useState } from 'react';

export function useForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [participants, setParticipants] = useState('');
  const [agreed, setIsAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return {
    name,
    phone,
    participants,
    agreed,
    isSuccess,
    setName,
    setPhone,
    setParticipants,
    setIsAgreed,
    setIsSuccess
  };
}
