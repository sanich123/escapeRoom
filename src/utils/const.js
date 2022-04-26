import { ReactComponent as IconAllQuests } from '../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../assets/img/icon-scifi.svg';

export const genres = ['Все квесты','Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'];

export const genresList = {
  allQuests: 'Все квесты',
  adventures: 'Приключения',
  horrors: 'Ужасы',
  mistic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi'
};

export const types = {
  'Все квесты': <IconAllQuests />,
  'Приключения': <IconAdventures/>,
  'Ужасы': <IconHorrors/>,
  'Мистика': <IconMystic />,
  'Детектив': <IconDetective />,
  'Sci-fi': <IconScifi />,
};

export const ROOT_URL = 'http://localhost:3001/quests';

export const navLinks = {
  'Квесты': '/',
  'Новичкам': '/novices',
  'Отзывы': '/reviews',
  'Акции': '/discounts',
  'Контакты': '/contacts',
};

export const appRoutes = {
  main: '/',
  contacts: '/contacts',
};

export const defaultQuest = {
  coverImg: 'default',
  title: 'default',
  type: 'default',
  duration: 0,
  peopleCount: [0, 0],
  level: 'default',
  description: 'default',
};
