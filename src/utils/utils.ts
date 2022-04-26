import { genresList } from './const';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export const langChanger = (string: string) => {
  if (string === 'hard') {
    return 'тяжелый';
  }
  if (string === 'easy') {
    return 'простой';
  }
  return 'средний';
};

export const genreChanger = (genre: string) => {
  if (genre === genresList.allQuests) {
    return '';
  }
  if (genre === genresList.adventures) {
    return 'adventures';
  }
  if (genre === genresList.mistic) {
    return 'mystic';
  }
  if (genre === genresList.detective) {
    return 'detective';
  }
  if (genre === genresList.horrors) {
    return 'horror';
  }
  return 'sci-fi';
};

export const normalizedError = (error: SerializedError | FetchBaseQueryError) => JSON.parse(JSON.stringify(error));
