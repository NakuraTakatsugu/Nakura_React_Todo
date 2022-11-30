import { TodoApp } from './components/TodoApp';

import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      <TodoApp />;
    </ChakraProvider>
  );
};
