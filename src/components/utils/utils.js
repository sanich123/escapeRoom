import { genresList } from "./const";

export const langChanger = (string) => {
  if (string === 'hard') {
    return 'тяжелый';
  }
  if (string === 'easy') {
    return 'простой';
  }
  return 'средний';
}

export const genreChanger = (genre) => {
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
  if (genre === genresList.sciFi) {
    return 'sci-fi';
  }
}
