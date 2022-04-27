import { IconAllQuests, IconAdventures, IconHorrors, IconMystic, IconDetective, IconScifi } from '../components/svg/svg';

export const MAP_WIDTH = 649;
export const MAP_HEIGHT = 336;
export const PHONE_NUMBER = '8 (800) 333-55-99';
export const COORDINATES = [59.968137, 30.316272];

export const genresListRu = {
  allQuests: 'Все квесты',
  adventures: 'Приключения',
  horrors: 'Ужасы',
  mistic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi'
} as const;

export const genresListEng = {
  adventures: 'adventures',
  mystic: 'mystic',
  detective: 'detective',
  horror: 'horror',
  sciFi: 'sci-fi'
} as const;

export const levelsRu = {
  hard: 'тяжелый',
  medium: 'средний',
  easy: 'простой',
} as const;

export const levelsEng = {
  hard: 'hard',
  easy: 'easy',
  medium: 'medium',
} as const;

export const types = {
  'Все квесты': <IconAllQuests />,
  'Приключения': <IconAdventures/>,
  'Ужасы': <IconHorrors/>,
  'Мистика': <IconMystic />,
  'Детектив': <IconDetective />,
  'Sci-fi': <IconScifi />,
} as const;

export const ROOT_URL = 'http://localhost:3001/quests';
export const BASE_URL = 'http://localhost:3001/';

export const apiRoutes = {
  quests: 'quests',
  orders: 'orders'
} as const;

export const navLinks = {
  'Квесты': '/',
  'Новичкам': '/novices',
  'Отзывы': '/reviews',
  'Акции': '/discounts',
  'Контакты': '/contacts'
} as const;

export const appRoutes = {
  main: '/',
  contacts: '/contacts',
  quest: '/detailed-quest'
} as const;

export const defaultQuest = {
  coverImg: 'default',
  title: 'default',
  type: 'default',
  duration: 0,
  peopleCount: [0, 0],
  level: 'default',
  description: 'default',
};

export const badResponses = {
  notFound: 404,
  wrongData: 400,
} as const;

export const messages = {
  success: 'Your data has successfully sended! Hurray!',
  failedQuests: 'The list of quests is unavailable now',
  networkProblem: 'не удалось отправить (или получить) данные. Проверьте, есть ли интернет в вашей стране!',
  wrongAddress: 'The request was send, but it occured, that server might be on another path. Check you path, motherfucker!',
} as const;


