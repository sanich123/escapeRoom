import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [quests, setQuests] = useState();

  useEffect(() => {
    (async () => {
      try {
        const quests = await (await fetch('http://localhost:3001/quests')).json();
        setQuests(quests);
      }
      catch {
        <h1>Something is going wrong</h1>
      }
    })();
  }, []);

  return quests;
};
