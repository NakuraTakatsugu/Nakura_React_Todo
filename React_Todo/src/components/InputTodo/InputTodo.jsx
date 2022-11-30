import { Input, Button, Flex } from '@chakra-ui/react';

export const InputTodo = ({ text, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Flex alignItems="center" justifyContent="center" gap="4">
        <Input type="text" value={text} onChange={onChange} />
        <Button type="submit" colorScheme="teal" size="sm" onSubmit={onSubmit}>
          追加
        </Button>
      </Flex>
    </form>
  );
};
