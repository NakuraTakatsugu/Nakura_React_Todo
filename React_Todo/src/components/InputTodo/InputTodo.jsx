export const InputTodo = ({ text, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit" onSubmit={onSubmit}>
        追加
      </button>
    </form>
  );
};
