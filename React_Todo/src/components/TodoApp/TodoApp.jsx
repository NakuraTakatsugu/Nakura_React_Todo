import React from 'react';
import { useTodo } from '../../hooks/useTodo';
import { useFilter } from '../../hooks/useFilter';
import { Filter } from '../Filter';
import { InputTodo } from '../InputTodo';
import { useInputTodo } from '../../hooks/useInputTodo';
import { Container, List, ListItem } from '@chakra-ui/react';

import { TodoItem } from '../TodoItem';

export const TodoApp = () => {
  const { text, handleOnChange, handleReset } = useInputTodo();
  const { filter, handleFilter } = useFilter();
  const {
    todos,
    error,
    handleSubmit,
    handleUpdate,
    handleComplete,
    handleDiscard,
    handleRestore,
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
    <Container>
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
      <List>
        {filteredTodos.map((todo) => {
          return (
            <ListItem key={todo?.id} gap="4">
              <TodoItem
                todo={todo}
                handleUpdate={(e) => handleUpdate(e, todo)}
                handleComplete={() => handleComplete(todo)}
                handleDiscard={() => handleDiscard(todo)}
                handleRestore={() => handleRestore(todo)}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
