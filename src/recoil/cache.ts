import { atom } from 'recoil';
import { ICachedResultsState } from '../types/hooks';

const cachedMapsAtom = atom<ICachedResultsState>({
  key: 'cachedMapsAtom',
  default: {},
});

export { cachedMapsAtom };
