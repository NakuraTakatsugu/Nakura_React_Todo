export const InputTodo = ({ text, onChange, onSubmit, handleReset }) => {
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e, text);
        handleReset();
      }}
    >
      <input type="text" value={text} onChange={onChange} />
      <input type="submit" value="追加" onSubmit={onSubmit} />
    </form>
  );
};
