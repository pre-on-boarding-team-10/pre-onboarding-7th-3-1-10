import { AxiosResponse } from 'axios';

export interface IAPIDebounceResState {
  [key: string]: string;
}

export interface ICachedItem {
  data: IAPIDebounceResState[];
  expiredTime: number;
}

export interface ICachedResultsState {
  [key: string]: ICachedItem;
}

export type TAPICallback = (debouncedValue: string) => Promise<AxiosResponse>;
