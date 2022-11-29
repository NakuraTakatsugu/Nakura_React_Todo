import useSWR from 'swr';
import { fetcher } from '../../utils/api';

// IDのTODOを取得する
export const useFetchTodo = (id) => {
  const { data, error, mutate } = useSWR(`/todos/${id}`, fetcher);

  return { data, error, mutate };
};
