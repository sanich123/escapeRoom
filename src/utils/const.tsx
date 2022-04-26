import { IconAllQuests, IconAdventures, IconHorrors, IconMystic, IconDetective, IconScifi } from '../components/svg/svg';

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
export const BASE_URL = 'http://localhost:3001/';

export const apiRoutes = {
  quests: 'quests',
  orders: 'orders'
};

export const navLinks = {
  'Квесты': '/',
  'Новичкам': '/novices',
  'Отзывы': '/reviews',
  'Акции': '/discounts',
  'Контакты': '/contacts'
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

export const messages = {
  success: 'Your data has successfully sended! Hurray!',
  failedQuest: 'Не удалось получить данные по квесту',
  failedQuests: 'The list of quests is unavailable now',
};
