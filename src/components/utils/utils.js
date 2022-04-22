export const langChanger = (string) => {
  if (string === 'hard') {
    return 'тяжелый';
  }
  if (string === 'easy') {
    return 'простой';
  }
  return 'средний';
}
