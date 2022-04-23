import { useState, useEffect } from 'react';
import { rootUrl } from '../utils/const';

export const useQuests = (filter) => {
  const [quests, setQuests] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${rootUrl}${filter ? `?type=${filter}` : ''}`);
        // eslint-disable-next-line no-console
        console.log(response);
        const result = await response.json();
        setQuests(result);
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
