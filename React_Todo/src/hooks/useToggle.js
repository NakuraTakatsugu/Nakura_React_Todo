import { useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle];
};
