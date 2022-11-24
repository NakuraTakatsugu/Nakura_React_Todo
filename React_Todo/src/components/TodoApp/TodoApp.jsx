import React from 'react';
import { Filter, useFilter } from '../Filter';
import { InputTodo, useInputTodo } from '../InputTodo';
import { TodoItem } from '../TodoItem';
import { useCreateTodo, useUpdateTodo, useFetchTodos, useFetchTodo } from './';

export const TodoApp = () => {
  const { text, handleOnChange, handleReset } = useInputTodo();
  // const { filter, handleFilter } = useFilter();
  const handleOnSubmit = useCreateTodo();
  const handleOnEdit = useUpdateTodo();
  const { data: todos, error } = useFetchTodos();

  // const filteredTodos = todos.filter((todo) => {
  //   switch (filter) {
  //     case 'all':
  //       return !todo.removed;
  //     case 'checked':
  //       return todo.checked && !todo.removed;
  //     case 'unchecked':
  //       return !todo.checked && !todo.removed;
  //     case 'removed':
  //       return todo.removed;
  //     default:
  //       return todo;
  //   }
  // });

  if (error) return <div>Error</div>;
  if (!todos) return <div>Loading...</div>;

  return (
    //  <div>
    //     <Filter onChange={handleFilter} />
    // {filter === 'removed' ? (
    //   <button
    //     onClick={handleOnEmpty}
    //     disabled={todos.filter((todo) => todo.removed).length === 0}
    //   >
    //     ごみ箱を空にする
    //   </button>
    // ) : (
    //   filter !== 'checked' && (
    //     <InputTodo
    //       text={text}
    //       onChange={handleOnChange}
    //       onSubmit={(e) => {
    //         handleOnSubmit(e, text);
    //         handleReset();
    //       }}
    //       handleReset={handleReset}
    //     />
    //   )
    // )}
    <div>
      <InputTodo
        text={text}
        onChange={handleOnChange}
        onSubmit={(e) => {
          handleOnSubmit(e, text);
          handleReset();
        }}
      />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                id={todo.id}
                // handleOnCheck={() => handleOnCheck(todo.id, todo.checked)}
                handleOnEdit={async (e) => {
                  await handleOnEdit(todo, e.target.value);
                }}
                // handleOnRemove={() => handleOnRemove(todo.id, todo.removed)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
