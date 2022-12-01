import useSWR from 'swr';
import { fetcher, createTodo, updateTodo } from '../utils/api';

export const useTodo = () => {
  const { data: todos, error, mutate } = useSWR('/todos', fetcher);

  const handleOnSubmit = async (e, text) => {
    e.preventDefault();

    if (!text) return;

    const newTodo = {
      value: text,
      checked: false,
      removed: false,
    };

    try {
      const res = await createTodo(newTodo);
      mutate([...todos,res])
    } catch (error) {
      console.error(err);
    }

  };

  const handleOnEdit = async (e,todo) => {
    try {
      const res = await updateTodo(todo, e.target.value);
      const filteredTodos = todos.filter((t) => t.id !== todo.id);
      mutate([...filteredTodos, res], false);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    todos,
    error,
    handleOnSubmit,
    handleOnEdit,
  };
}
