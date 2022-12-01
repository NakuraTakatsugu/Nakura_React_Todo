import React from 'react';
import { useFilter } from '../../hooks/useFilter';
import { Filter } from '../Filter';
import { InputTodo, useInputTodo } from '../InputTodo';
import { TodoItem } from '../TodoItem';
import { useTodo } from '../../hooks/useTodo';

export const TodoApp = () => {
  const { text, handleOnChange, handleReset } = useInputTodo();
  const { filter, handleFilter } = useFilter();
  const {
    todos,
    handleOnSubmit,
    handleOnEdit,
    // handleOnCheck,
    // handleOnRemove,
    // handleOnEmpty,
  } = useTodo();

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

  if (!todos) return <div>loading</div>;

  if (error) return <div>error</div>;


  return (
    <div>
      <Filter onChange={handleFilter} />
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
            onSubmit={(e) => {
              handleOnSubmit(e, text);
              handleReset();
            }}
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
                handleOnCheck={() => handleOnCheck(todo.id, todo.checked)}
                handleOnEdit={(e) => handleOnEdit(todo.id, e.target.value)}
                handleOnRemove={() => handleOnRemove(todo.id, todo.removed)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
