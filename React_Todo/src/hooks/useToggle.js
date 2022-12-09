import { useState } from 'react';

export const useToggle = () => {
  const [bool, setBool] = useState(false);

  const toggle = () => {
    setBool((bool) => !bool);
  }

  return [bool, toggle];
}