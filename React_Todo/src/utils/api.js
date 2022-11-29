import axios from 'axios';
import { API_BASE_URL } from '../config';

export const fetcher = (url) =>
  axios.get(API_BASE_URL + url).then((res) => res.data);

export const createTodo = (todo) => {
  axios.post(`${API_BASE_URL}/todos`, {
    title: todo.title,
    isCompleted: todo.isCompleted,
    isDiscarded: todo.isDiscarded,
    isChecked: todo.isChecked,
  });
};

export const updateTodo = (todo, value) => {
  const updatedTodo = { ...todo, title: value };

  axios.put(`${API_BASE_URL}/todos/${todo.id}`, updatedTodo);
};

export const deleteTodo = (todo) => {
  axios.delete(`${API_BASE_URL}/todos/${todo.id}`);
};