import useSWR from 'swr';
import { fetcher, createTodo, updateTodo } from '../../utils/api';

// TODO一覧を取得する
export const useFetchTodos = () => {
  const { data, error } = useSWR('/todos', fetcher);

  return { data, error };
};

// IDのTODOを取得する
export const useFetchTodo = (id) => {
  const { data, error, mutate } = useSWR(`/todos/${id}`, fetcher);

  return { data, error, mutate };
};

// 新規TODOを作成する
export const useCreateTodo = () => {
  const { data, mutate } = useSWR('/todos', fetcher);

  const handleOnSubmit = async (e, text) => {
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

  return handleOnSubmit;
};

export const useUpdateTodo = () => {
  const handleOnEdit = async (todo, value) => {
    const updatedTodo = { ...todo, title: value };

    try {
      await updateTodo(todo.id, updatedTodo);
    } catch (err) {
      console.error(err);
    }
  };

  return handleOnEdit;
};

const handleOnCheck = (id = Number, checked = Boolean) => {
  const deepCopy = todos.map((todo) => ({ ...todo }));

  const newTodos = deepCopy.map((todo) => {
    if (todo.id === id) {
      todo.checked = !checked;
    }
    return todo;
  });

  setTodos(newTodos);
};

const handleOnRemove = (id = Number, removed = Boolean) => {
  const deepCopy = todos.map((todo) => ({ ...todo }));

  const newTodos = deepCopy.map((todo) => {
    if (todo.id === id) {
      todo.removed = !removed;
    }
    return todo;
  });

  setTodos(newTodos);
};

const handleOnEmpty = () => {
  const newTodos = todos.filter((todo) => !todo.removed);
  setTodos(newTodos);
};

// return {
//   todos,
//   handleOnSubmit,
//   handleOnEdit,
//   handleOnCheck,
//   handleOnRemove,
//   handleOnEmpty,
// };
