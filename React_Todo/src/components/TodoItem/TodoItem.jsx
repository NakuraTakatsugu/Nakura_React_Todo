import { useToggle } from '../../hooks/useToggle';

export const TodoItem = ({
  todo,
  // handleOnCheck,
  handleDiscard,
  handleUpdate,
  handleComplete,
  handleRestore,
}) => {
  const [on, handleToggle] = useToggle();

  console.log(on);
  return (
    <div>
      <input type="checkbox" checked={on} onChange={handleToggle} value={on} />
      {on ? (
        <>
          <input type="text" value={todo?.title} onChange={handleUpdate} />
          {!todo?.isCompleted && <button onClick={handleComplete}>完了</button>}
          {todo?.isDiscarded ? (
            <button onClick={handleRestore}>復元</button>
          ) : (
            <button onClick={handleDiscard}>削除</button>
          )}
        </>
      ) : (
        <span>{todo?.title}</span>
      )}
    </div>
  );
};
