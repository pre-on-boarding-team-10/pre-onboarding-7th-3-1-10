import { useRef, useState, KeyboardEvent, useCallback } from 'react';
import { ISearchResultListState, TEvent } from '../types/hooks';

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
    const isArrowUpActive = e.key === 'ArrowUp' && currLocatedIdx > 0;
    if (isArrowUpActive) {
      setCurrLocatedIdx(prev => prev - 1);
      return;
    }

    const isArrowDownActive =
      e.key === 'ArrowDown' && currLocatedIdx < searchResultList.length - 1;
    if (isArrowDownActive) {
      setCurrLocatedIdx(prev => prev + 1);
      return;
    }
  };

  const initiallizeCurrLocatedIdx = useCallback(
    (e: TEvent) => {
      if ('key' in e) {
        const isInitializedIdx = e.key !== 'ArrowDown' && e.key !== 'ArrowUp';
        if (isInitializedIdx) setCurrLocatedIdx(-1);
        return;
      } else {
        setCurrLocatedIdx(-1);
      }
    },
    [setCurrLocatedIdx]
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
    [currLocatedIdx]
  );

  return {
    onKeyDownHandler,
    initiallizeCurrLocatedIdx,
    scrollRef,
    currLocatedIdx,
  };
};

export default useMoveUpAndDown;
