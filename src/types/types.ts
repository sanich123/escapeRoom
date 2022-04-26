import { ReactElement } from 'react';

export interface ChildrenType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: string | ReactElement | any,
}

export interface EvtType {
  target: {
    value: string
  }
}

export interface ParamsProps {
  id: string,
}

export interface QuestType {
  id: number,
  coverImg: string,
  title: string,
  level: string,
  peopleCount: number[]
}

export interface SvgProps {
  width?: string,
  height?: string,
}

export interface TabBtnProps {
  isActive: boolean,
  onClick: (arg: string) => void
}

export interface GlobalStyleProps {
  theme: {
    font: {
      base: string
    }
    color: {
      whisper: string,
      nero: string,
      black: string,
      white: string,
      tangerine: string,
    }
  }
}
