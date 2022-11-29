import useSWR from 'swr';
import { fetcher, createTodo, updateTodo, deleteTodo } from '../utils/api';

export const useTodo = () => {
  const { data: todos, error, mutate } = useSWR('/todos', fetcher);

  const handleSubmit = async (e, text) => {
    e.preventDefault();

    if (!text) return;

    const newTodo = {
      title: text,
      isCompleted: false,
      isDiscarded: false,
      isChecked: false,
    };

    try {
      const res = await createTodo(newTodo);
      mutate([...todos, res]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e, todo) => {
    try {
      await updateTodo(todo, e.target.value);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (todo) => {
    try {
      const res = await deleteTodo(todo);
      mutate([...todos, res]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRestore = async (todo) => {
    try {
      const res = await deleteTodo(todo);
      mutate([...todos, res]);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    todos,
    error,
    mutate,
    handleSubmit,
    handleUpdate,
    handleDelete,
    handleRestore,
  };
};
