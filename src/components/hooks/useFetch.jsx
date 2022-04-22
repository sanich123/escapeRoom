import { useState, useEffect } from 'react';

export const useQuests = () => {
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

export const useQuest = (id) => {
  const [quest, setQuest] = useState();
  useEffect(() => {
    (async () => {
      try {
        const quest = await (await fetch(`http://localhost:3001/quests/${id}`)).json();
        setQuest(quest);
      }
      catch {
        <h1>something is going wrong</h1>
      }
    })();
  }, [id])
  return quest;
}
