import { useToggle } from '../../hooks/useToggle';

export const TodoItem = ({
  todo,
  handleDiscard,
  handleUpdate,
  handleComplete,
  handleRestore,
}) => {
  const [on, toggle] = useToggle();

  return (
    <>
      <input
        type="checkbox"
        checked={on}
        onChange={toggle}
        value={on}
        onClick={handleComplete}
      />
      <input
        type="text"
        value={todo?.title}
        onChange={handleUpdate}
        disabled={on}
      />
      {!todo.isCompleted && (
        <button onClick={handleComplete}>
          完了
        </button>
      )}
      {todo?.isDiscarded ? (
        <button onClick={handleRestore}>
          復元
        </button>
      ) : (
        <button onClick={handleDiscard}>
          削除
        </button>
      )}
    </>
  );
};
