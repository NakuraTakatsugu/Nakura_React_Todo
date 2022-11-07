import { useState } from 'react';

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

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

  const handleOnEdit = (id = 0, value = '',checked = false) => {
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

  const handleOnCheck = (id = 0, checked = undefined) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input type="text" value={text} onChange={(e) => handleOnChange(e)} />
        <input type="submit" value="追加" onSubmit={handleOnSubmit} />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange ={(e)=> handleOnCheck(todo.id,todo.checked)}
              />
              <input
                type="text"
                value={todo.value}
                disabled={todo.checked}
                onChange={(e) => handleOnEdit(todo.id,e.target.value)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
