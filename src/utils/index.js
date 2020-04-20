import { useLocation } from 'react-router-dom';

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default {
  useQuery
};
