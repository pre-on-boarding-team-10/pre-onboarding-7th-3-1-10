import { KeyboardEvent, FocusEvent } from 'react';

export interface ISearchResultListState {
  sickCd: string;
  sickNm: string;
}

export type TEvent =
  | KeyboardEvent<HTMLInputElement>
  | FocusEvent<HTMLInputElement>;
