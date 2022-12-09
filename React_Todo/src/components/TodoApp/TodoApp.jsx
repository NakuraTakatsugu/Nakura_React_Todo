import React from 'react';
import { useFilter } from '../../hooks/useFilter';
import { Filter } from '../Filter';
import { useTodo } from '../../hooks/useTodo';
import { InputTodo } from '../InputTodo';
import { useInputTodo } from '../../hooks/useInputTodo';
import { TodoItem } from '../TodoItem';

export const TodoApp = () => {
  const { text, handleChange, handleReset } = useInputTodo();
  const { filter, handleFilter } = useFilter();
  const {
    todos,
    error,
    handleSubmit,
    handleUpdate,
    handleComplete,
    handleRestore,
    handleDiscard,
    handleAllDelete,
  } = useTodo();

  const filteredTodos = todos?.filter((todo) => {
    switch (filter) {
      case 'all':
        return todo;
      case 'completed':
        return todo?.isCompleted;
      case 'uncompleted':
        return !todo?.isCompleted;
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
      <InputTodo
        text={text}
        onChange={handleChange}
        onSubmit={async(e) => {
          await handleSubmit(e, text);
          handleReset();
        }}
      />
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                handleUpdate={(e) => handleUpdate(e,todo)}
                handleComplete={() => handleComplete(todo)}
                handleDiscard={() => handleDiscard(todo)}
                handleRestore= {()=> handleRestore(todo)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
