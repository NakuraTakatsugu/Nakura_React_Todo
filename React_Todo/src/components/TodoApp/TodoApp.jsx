import React from 'react';
import { useState } from 'react';
import { InputTodo } from '../InputTodo';
import { TodoItem } from '../TodoItem';
import { useInputTodo, useTodos } from './';

export const TodoApp = () => {
  const { text, handleOnChange, handleReset } = useInputTodo();
  const {
    todos,
    handleOnSubmit,
    handleOnEdit,
    handleOnCheck,
    handleOnRemove,
    handleOnEmpty,
  } = useTodos();

  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div>
      <select defaultValue="all" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了したタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">ごみ箱</option>
      </select>
      {filter === 'removed' ? (
        <button
          onClick={handleOnEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
          ごみ箱を空にする
        </button>
      ) : (
        filter !== 'checked' && (
          <InputTodo
            text={text}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
            handleReset={handleReset}
          />
        )
      )}
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                handleOnCheck={handleOnCheck}
                handleOnEdit={handleOnEdit}
                handleOnRemove={handleOnRemove}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
