import { useState } from 'react';

export const App = () => {
  const [text, setText] = useState(String);
  const [todos, setTodos] = useState(Array);
  const [filter, setFilter] = useState('all');
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!text) return;

    const newTodo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false
    };

    setTodos([newTodo, ...todos]);
    setText('');
  };

  const handleOnEdit = (id = Number, value = String,checked = Boolean) => {
    const deepCopy = todos.map((todo) => ({...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    console.log('=== Original todos ===');
    todos.map((todo) => console.log(`id: ${todo.id}, value: ${todo.value}`));


    setTodos(newTodos);
  }

  const handleOnCheck = (id = Number, checked = Boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleOnRemove = (id = Number, removed = Boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  return (
    <div>
      <select defaultValue="all" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了したタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">ごみ箱</option>
      </select>
      {filter === 'removed' ? (
        <button
          onClick={handleOnEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
        ごみ箱を空にする
        </button>
      ) : (
      filter !== 'checked' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit();
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e)}
          />
          <input type="submit" value="追加" onSubmit={handleOnSubmit} />
        </form>
        ))}
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                disabled={todo.removed}
                checked={todo.checked}
                onChange ={(e)=> handleOnCheck(todo.id,todo.checked)}
              />
              <input
                type="text"
                value={todo.value}
                disabled={todo.checked || todo.removed}
                onChange={(e) => handleOnEdit(todo.id,e.target.value)}
              />
              <button onClick={() => handleOnRemove(todo.id, todo.removed)}>
                {todo.removed ? '復元' : '削除'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
