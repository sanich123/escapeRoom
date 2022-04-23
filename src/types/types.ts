import { ReactElement } from 'react';

export interface ChildrenType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: string | ReactElement | any,
}
export interface EvtType {
  target: {value: string}
}

export interface QuestType {
  id: number,
  coverImg: string,
  title: string,
  level: string,
  peopleCount: number[],
}
