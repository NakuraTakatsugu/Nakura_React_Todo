import axios from 'axios';
import { API_BASE_URL } from "../config";

export const fetcher = (URL) =>
  axios.get(API_BASE_URL + URL).then((res) => res.data);

export const createTodo = (todo) => {
  axios.post(`${API_BASE_URL}/todos`, {
    title: todo.title,
    isCompleted: todo.isCompleted,
    isDiscarded: todo.isDiscarded,
  });
};

export const updateTodo = (todo, value) => {
  const updateTodo = { ...todo, title: value };

  axios.put(`${API_BASE_URL}/todos/${todo.id}`, updateTodo);
};

export const completeTodo = (todo) => {
  axios.put(`${API_BASE_URL}/todos/${todo.id}/complete`, {
    ...todo,
    isCompleted: true,
  });
};

export const discardTodo = (todo) => {
  axios.put(`${API_BASE_URL}/todos/${todo.id}/discard`, {
    ...todo,
    isDiscarded: true,
  });
};

export const restoreTodo = (todo) => {
  axios.put(`${API_BASE_URL}/todos/${todo.id}/restore`, {
    ...todo,
    isRestored:true,
  });
};

export const deleteTodo = (todo) => {
  axios.delete(`${API_BASE_URL}/todos/${todo.id}`);
};
