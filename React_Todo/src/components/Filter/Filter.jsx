export const Filter = ({ onChange }) => {
  return (
    <select defaultValue="all" onChange={onChange}>
      <option value="all">すべてのタスク</option>
      <option value="completed">完了したタスク</option>
      <option value="uncompleted">現在のタスク</option>
      <option value="discarded">ごみ箱</option>
    </select>
  );
};
