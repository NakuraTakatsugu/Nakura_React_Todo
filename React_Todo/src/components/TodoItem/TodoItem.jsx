import { useToggle } from '../../hooks/useToggle';

export const TodoItem = ({
  todo,
  // handleOnCheck,
  handleDelete,
  handleUpdate,
}) => {
  const [on, handleToggle] = useToggle();

  console.log(on);
  return (
    <div>
      <input
        type="checkbox"
        disabled={todo.isDiscarded}
        checked={on}
        onChange={handleToggle}
        value={on}
      />
      {on ? (
        <>
          <input
            type="text"
            value={todo?.title}
            disabled={todo?.isChecked || todo?.isDiscarded}
            onChange={handleUpdate}
          />
          {todo?.isDiscarded ? (
            <button onClick={handleDelete}>復元</button>
          ) : (
            <button onClick={handleDelete}>削除</button>
          )}
        </>
      ) : (
        <span>{todo?.title}</span>
      )}
    </div>
  );
};
