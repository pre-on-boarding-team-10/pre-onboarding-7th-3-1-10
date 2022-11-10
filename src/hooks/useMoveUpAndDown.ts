import {
  ChangeEvent,
  useRef,
  useState,
  KeyboardEvent,
  FocusEvent,
  useCallback,
} from 'react';
import { ISearchResultListState } from '../types/pages';

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
    searchResultList: ISearchResultListState[]
  ) => {
    const isArrowDownActive = currLocatedIdx < searchResultList.length - 1;

    if (e.key === 'ArrowDown' && isArrowDownActive) {
      setCurrLocatedIdx(prev => prev + 1);
      return;
    }

    const isArrowUpActive = currLocatedIdx !== 0;

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
    []
  );

  const onKeyDownHandler = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      searchResultList: ISearchResultListState[]
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
