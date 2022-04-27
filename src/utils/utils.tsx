import { levelsEng, levelsRu, genresListRu, genresListEng, messages, badResponses } from './const';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { toast } from 'react-toastify';
import Page404 from '../components/page404/not-found-page';

export const langChanger = (string: string) => {
  switch (string) {
    case (levelsEng.hard) : return levelsRu.hard;
    case (levelsEng.easy) : return levelsRu.easy;
    case (levelsEng.medium) : return levelsRu.medium;
  }
};

export const genreChanger = (genre: string) => {
  switch (genre) {
    case (genresListRu.allQuests) : return '';
    case (genresListRu.adventures) : return genresListEng.adventures;
    case (genresListRu.mistic) : return genresListEng.mystic;
    case (genresListRu.detective) : return genresListEng.detective;
    case (genresListRu.horrors) : return genresListEng.horror;
    case (genresListRu.sciFi) : return genresListEng.sciFi;
    default : return '';
  }
};

export const normalizedError = (error: SerializedError | FetchBaseQueryError) => JSON.parse(JSON.stringify(error));

export const errorHandler = (error: SerializedError | FetchBaseQueryError) => {
  const info = normalizedError(error);
  if (info.status === badResponses.notFound) {
    toast.warn(messages.wrongAddress);
    return <Page404/>;
  } else if (info.status === badResponses.wrongData) {
    toast.error(normalizedError(error).data.messages.join(''));
    return <h1>Неправильные данные</h1>;
  } else {
    toast.error(`${info.status} ${info.error} ${messages.networkProblem}`);
    return (
      <h1>
        `${info.status} ${info.error} ${messages.networkProblem}`
      </h1>
    );
  }
};
