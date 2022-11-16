export const TodoItem = ({
  todo,
  handleOnCheck,
  handleOnEdit,
  handleOnRemove,
}) => {
  return (
    <>
      <input
        type="checkbox"
        disabled={todo.removed}
        checked={todo.checked}
        onChange={() => handleOnCheck(todo.id, todo.checked)}
      />
      <input
        type="text"
        value={todo.value}
        disabled={todo.checked || todo.removed}
        onChange={(e) => handleOnEdit(todo.id, e.target.value)}
      />
      <button onClick={() => handleOnRemove(todo.id, todo.removed)}>
        {todo.removed ? '復元' : '削除'}
      </button>
    </>
  );
};
