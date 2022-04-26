import { levelsEng, levelsRu, genresListRu, genresListEng } from './const';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

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
