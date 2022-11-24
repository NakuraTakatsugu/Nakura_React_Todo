import { useFetchTodo } from '../TodoApp';

export const TodoItem = ({
  todo,
  // handleOnCheck,
  handleOnEdit,
  // handleOnRemove,
  id,
}) => {
  // const { data, mutate } = useFetchTodo(todo.id);
  // mutate({ ...data, todo });

  return (
    <>
      <input
        type="checkbox"
        disabled={todo.isDiscarded}
        checked={todo.isChecked}
        // onChange={handleOnCheck}
      />
      <input
        type="text"
        value={todo.title}
        id={id}
        disabled={todo.isChecked || todo.isDiscarded}
        onChange={handleOnEdit}
      />
      <button
      // onClick={handleOnRemove}
      >
        {todo.isDiscarded ? '復元' : '削除'}
      </button>
    </>
  );
};
