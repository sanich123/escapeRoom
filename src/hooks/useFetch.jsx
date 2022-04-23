/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { rootUrl } from '../utils/const';

export const useQuests = (filter) => {
  const [quests, setQuests] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${rootUrl}${filter ? `?type=${filter}` : ''}`);
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

export const useQuest = (id) => {
  const [quest, setQuest] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${rootUrl}/${id}`);
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
