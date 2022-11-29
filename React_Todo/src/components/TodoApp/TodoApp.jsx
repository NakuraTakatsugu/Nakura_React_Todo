import React from 'react';
import { useTodo } from '../../hooks/useTodo';
import { useFilter } from '../../hooks/useFilter';
import { Filter } from '../Filter';
import { InputTodo } from '../InputTodo';
import { useInputTodo } from '../../hooks/useInputTodo';

import { TodoItem } from '../TodoItem';

export const TodoApp = () => {
  const { text, handleOnChange, handleReset } = useInputTodo();
  const { filter, handleFilter } = useFilter();
  const {
    todos,
    error,
    handleSubmit,
    handleUpdate,
    handleDelete,
    handleRestore,
  } = useTodo();

  const filteredTodos = todos?.filter((todo) => {
    switch (filter) {
      case 'all':
        return todo;
      case 'completed':
        return todo?.isCompleted && !todo?.isDiscarded;
      case 'uncompleted':
        return !todo?.isCompleted && !todo?.isDiscarded;
      case 'discarded':
        return todo?.isDiscarded;
      default:
        return todo;
    }
  });

  if (!todos) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <div>
      <Filter onChange={handleFilter} />
      {filter === 'discarded' ? (
        <button
          // onClick={handleOnEmpty}
          disabled={todos?.filter((todo) => todo.isDiscarded).length === 0}
        >
          ごみ箱を空にする
        </button>
      ) : (
        filter !== 'completed' && (
          <InputTodo
            text={text}
            onChange={handleOnChange}
            onSubmit={async (e) => {
              await handleSubmit(e, text);
              handleReset();
            }}
          />
        )
      )}
      <div>
        <ul>
          {filteredTodos.map((todo) => {
            return (
              <li key={todo?.id}>
                <TodoItem
                  todo={todo}
                  handleUpdate={(e) => handleUpdate(e, todo)}
                  // handleOnCheck={() => handleOnCheck(todo.id, todo.checked)}
                  handleDelete={() => handleDelete(todo)}
                  handleRestore={() => handleRestore(todo)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
