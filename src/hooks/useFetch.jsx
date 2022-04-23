import { useState, useEffect } from 'react';
import { rootUrl } from '../utils/const';

export const useQuests = (filter) => {
  const [quests, setQuests] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch(`${rootUrl}${filter ? `?type=${filter}` : ''}`)).json();
        setQuests(response);
      }
      catch {
        <h1>Something is going wrong</h1>;
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
        const response = await (await fetch(`${rootUrl}/${id}`)).json();
        setQuest(response);
      }
      catch {
        <h1>something is going wrong</h1>;
      }
    })();
  }, [id]);
  return quest;
};
