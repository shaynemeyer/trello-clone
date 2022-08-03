import { useRef } from 'react';
import { useAppState } from '../state/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { moveList, addTask } from '../state/actions';
import { useItemDrag } from '../utils/useItemDrag';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';
import { isHidden } from '../utils/isHidden';

type ColumnProps = {
  text: string;
  id: string;
  isPreview?: boolean;
};

export const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  const { drag } = useItemDrag({ type: 'COLUMN', id, text });

  drag(drop(ref));

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card columnId={id} text={task.text} key={task.id} id={task.id} />
      ))}

      <AddNewItem
        dark
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </ColumnContainer>
  );
};
