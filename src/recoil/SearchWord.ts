import { atom } from 'recoil';

export const recommendationList: Array<string> = [
  'B형간염',
  '비만',
  '관절염',
  '우울증',
  '식도염',
];

export const recentSearchList = atom<string[]>({
  key: 'recentSearch',
  default: [],
});
