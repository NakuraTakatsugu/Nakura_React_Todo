import { useState } from 'react';

export const useFilter = () => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return {
    filter,
    handleFilter,
  };
};
