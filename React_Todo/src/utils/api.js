import axios from 'axios';
import { API_BASE_URL } from "../config";

export const fetcher = (URL) =>
  axios.get(API_BASE_URL + URL).then((res) => res.data);

export const createTodo = (todo) => {
  axios.get(`${API_BASE_URL}/todos`, {
    title: todo.title,
    isCompleted: todo.isCompleted,
    isDiscarded: todo.isDiscarded,
    isChecked:todo.isChecked,
  })
}

export const updateTodo = (todo) => {
  axios.put(`${API_BASE_URL}/todos/${id}`, {
    title: todo.title,
    isCompleted: todo.isCompleted,
    isDiscarded: todo.isDiscarded,
    isChecked:todo.isChecked,
  })
}
