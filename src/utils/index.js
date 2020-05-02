import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default {
  useQuery,
  useIsMounted
};
