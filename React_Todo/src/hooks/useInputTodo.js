import { useState } from 'react';

export const useInputTodo = () => {
  const [text, setText] = useState(String);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText('');
  };

  return {
    text,
    handleChange,
    handleReset,
  };
};
