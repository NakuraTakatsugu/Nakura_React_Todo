import {
  Checkbox,
  Flex,
  Button,
  Editable,
  useEditableControls,
  Input,
} from '@chakra-ui/react';

export const TodoItem = ({
  todo,
  handleDiscard,
  handleUpdate,
  handleComplete,
  handleRestore,
}) => {
  return (
    <Flex gap="3">
      <Checkbox checked={on} onChange={handleToggle} value={on} />
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
      <span>{todo?.title}</span>
    </Flex>
  );
};
