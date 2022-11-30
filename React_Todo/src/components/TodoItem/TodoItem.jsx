import { useToggle } from '../../hooks/useToggle';
import { Checkbox, Flex, Button, Input } from '@chakra-ui/react';

export const TodoItem = ({
  todo,
  handleDiscard,
  handleUpdate,
  handleComplete,
  handleRestore,
}) => {
  const [on, handleToggle] = useToggle();

  console.log(on);
  return (
    <Flex gap="3">
      <Checkbox checked={on} onChange={handleToggle} value={on} />
      {on ? (
        <>
          <Input type="text" value={todo?.title} onChange={handleUpdate} />
          {!todo?.isCompleted && (
            <Button size="sm" onClick={handleComplete}>
              完了
            </Button>
          )}
          {todo?.isDiscarded ? (
            <Button size="sm" onClick={handleRestore}>
              復元
            </Button>
          ) : (
            <Button size="sm" onClick={handleDiscard}>
              削除
            </Button>
          )}
        </>
      ) : (
        <span>{todo?.title}</span>
      )}
    </Flex>
  );
};
