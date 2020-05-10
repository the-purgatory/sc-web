import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { debounce, roundOffWithBase } from './common';

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const useScroller = (
  target,
  {
    scrollPage = true,
    debounceTime = 100,
    direction = 'horizontal',
    pageSize
  } = {
    scrollPage: true,
    debounceTime: 100,
    direction: 'horizontal'
  }
) => {
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);
  const [scrolledAmount, setScrolledAmount] = useState(0);
  const scrollableSizeKey =
    direction === 'horizontal' ? 'scrollWidth' : 'scrollHeight';
  const visibleSizeKey =
    direction === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
  const scrolledSizeKey =
    direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';

  const isStartOfScroll = (scrollAmount) => scrollAmount === 0;
  const isEndOfScroll = (scrollAmount) =>
    target.current[scrollableSizeKey] <=
    scrollAmount + target.current[visibleSizeKey];
  const getPageSize = () => pageSize || target.current[visibleSizeKey];

  const updateState = (scrollAmount) => {
    let value = scrollAmount;
    if (isEndOfScroll(value)) {
      value =
        target.current[scrollableSizeKey] - target.current[visibleSizeKey];
    } else if (scrollPage) {
      value = roundOffWithBase(value, getPageSize());
    }
    // eslint-disable-next-line no-param-reassign
    target.current[scrolledSizeKey] = value;
    if (scrolledAmount !== value) {
      setScrolledAmount(() => value);
      setShowPrev(() => !isStartOfScroll(value));
      setShowNext(() => !isEndOfScroll(value));
    }
  };

  const scroll = (dir) => {
    const scrollAmount =
      dir > 0
        ? target.current[scrolledSizeKey] + getPageSize()
        : target.current[scrolledSizeKey] - getPageSize();

    updateState(scrollAmount);
  };

  const afterScroll = () => {
    updateState(target.current[scrolledSizeKey], true);
  };

  return {
    showNext,
    showPrev,
    scrollNext: () => scroll(1),
    scrollPrev: () => scroll(-1),
    onScroll: debounce(afterScroll, debounceTime)
  };
};

export { useQuery, useIsMounted, useScroller };
