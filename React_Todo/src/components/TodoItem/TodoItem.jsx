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
        onChange={handleOnCheck}
      />
      <input
        type="text"
        value={todo.value}
        disabled={todo.checked || todo.removed}
        onChange={handleOnEdit}
      />
      <button onClick={handleOnRemove}>{todo.removed ? '復元' : '削除'}</button>
    </>
  );
};