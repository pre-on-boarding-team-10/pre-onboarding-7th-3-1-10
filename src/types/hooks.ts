import { AxiosResponse } from 'axios';
import { ISearchResultListState } from './pages';

export interface IAPIDebounceResState {
  [key: string]: string;
}

export type TAPICallback = (debouncedValue: string) => Promise<AxiosResponse>;
