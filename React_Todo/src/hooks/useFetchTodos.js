import useSWR from 'swr';
import { fetcher } from '../../utils/api';

// TODO一覧を取得する
export const useFetchTodos = () => {
  const { data, error } = useSWR('/todos', fetcher);

  return { data, error };
};
