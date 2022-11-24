import useSWR from 'swr';
import { fetcher, createTodo, updateTodo } from '../../utils/api';

export const useTodo = () => {
  const { data: todos, error, mutate } = useSWR('/todos', fetcher);
};
