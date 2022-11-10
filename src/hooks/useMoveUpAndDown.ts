import {
  useRef,
  useState,
  KeyboardEvent,
  FocusEvent,
  useCallback,
} from 'react';
import { IAPIDebounceResState } from '../types/hooks';

const useMoveUpAndDown = () => {
  const [currLocatedIdx, setCurrLocatedIdx] = useState<number>(-1);
  const scrollRef = useRef<HTMLUListElement>(null);

  const scrolledInsideBox = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 32 * currLocatedIdx;
    }
  };

  const moveUpAndDown = (
    e: KeyboardEvent<HTMLInputElement>,
    searchResultList: IAPIDebounceResState[]
  ) => {
    const isArrowDownActive = currLocatedIdx < searchResultList.length - 1;
    const isArrowUpActive = currLocatedIdx !== 0;

    if (e.key === 'ArrowDown' && isArrowDownActive) {
      setCurrLocatedIdx(prev => prev + 1);
      return;
    }

    if (e.key === 'ArrowUp' && isArrowUpActive) {
      setCurrLocatedIdx(prev => prev - 1);
      return;
    }
  };

  const initiallizeCurrLocatedIdx = useCallback(
    (e: KeyboardEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) => {
      if ('key' in e) {
        const isInitializedIdx = e.key !== 'ArrowDown' && e.key !== 'ArrowUp';
        if (isInitializedIdx) setCurrLocatedIdx(-1);
        return;
      }
      setCurrLocatedIdx(-1);
    },
    [setCurrLocatedIdx]
  );

  const onKeyDownHandler = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      searchResultList: IAPIDebounceResState[]
    ) => {
      if (e.nativeEvent.isComposing) return;
      initiallizeCurrLocatedIdx(e);
      moveUpAndDown(e, searchResultList);
      scrolledInsideBox();
    },
    []
  );

  return {
    onKeyDownHandler,
    initiallizeCurrLocatedIdx,
    scrollRef,
    currLocatedIdx,
  };
};

export default useMoveUpAndDown;