import useSWR from 'swr';
import { fetcher, createTodo, updateTodo, deleteTodo } from '../utils/api';

export const useTodo = () => {
  const { data, error, mutate } = useSWR('/todos', fetcher);

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
      await createTodo(newTodo);
      mutate([...data, newTodo]);
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
    const res = await deleteTodo(todo);

    mutate(data.filter((todo) => todo.id !== res.id));
  };

  return { data, error, handleSubmit, handleUpdate, handleDelete };
};
