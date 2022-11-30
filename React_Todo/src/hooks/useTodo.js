import useSWR from 'swr';
import {
  fetcher,
  createTodo,
  updateTodo,
  discardTodo,
  completeTodo,
  restoreTodo,
} from '../utils/api';

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
      const res = await updateTodo(todo, e.target.value);
      const filteredTodos = todos.filter((t) => t.id !== todo.id);
      mutate([...filteredTodos, res]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleComplete = async (todo) => {
    try {
      const res = await completeTodo(todo);
      const filteredTodos = todos.filter((t) => t.id !== todo.id);
      mutate([...filteredTodos, res]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDiscard = async (todo) => {
    try {
      const res = await discardTodo(todo);
      const filteredTodos = todos.filter((t) => t.id !== todo.id);
      mutate([...filteredTodos, res]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRestore = async (todo) => {
    try {
      const res = await restoreTodo(todo);
      const filteredTodos = todos.filter((t) => t.id !== todo.id);
      mutate([...filteredTodos, res]);
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
    handleComplete,
    handleDiscard,
    handleRestore,
  };
};
