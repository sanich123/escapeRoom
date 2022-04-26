import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { QuestType } from '../types/types';
import { ROOT_URL } from '../utils/const';

export const useQuests = (filter: string | undefined) => {
  const [quests, setQuests] = useState<QuestType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${ROOT_URL}${filter ? `?type=${filter}` : ''}`);
        if (response.ok) {
          const result = await response.json();
          setQuests(result);
        } else {
          toast.warn('Не удалось выполнить запрос к серверу, произошла ошибка.');
        }
      }
      catch {
        toast.warn('Something is going wrong. Check you internet connection');
      }
    })();
  }, [filter]);

  return quests;
};

export const useQuest = (id: string) => {
  const [quest, setQuest] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${ROOT_URL}/${id}`);
        if (response.ok) {
          const result = await response.json();
          setQuest(result);
        } else {
          toast.warn('Не удалось выполнить запрос к серверу, произошла ошибка.');
        }
      }
      catch {
        toast.warn('Something is going wrong. Check you internet connection');
      }
    })();
  }, [id]);
  return quest;
};
