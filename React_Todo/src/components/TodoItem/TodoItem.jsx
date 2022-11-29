export const TodoItem = ({
  todo,
  // handleOnCheck,
  // handleOnRemove,
  handleUpdate,
  id,
}) => {
  return (
    <>
      {/* <input
        type="checkbox"
        disabled={todo.isDiscarded}
        checked={todo.isChecked}
        onChange={handleOnCheck}
      /> */}
      <input
        type="text"
        value={todo.title}
        id={id}
        disabled={todo.isChecked || todo.isDiscarded}
        onChange={handleUpdate}
      />
      <button>{todo.isDiscarded ? '復元' : '削除'}</button>
    </>
  );
};
