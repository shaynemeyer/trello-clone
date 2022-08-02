import { useAppState } from "../state/AppStateContext";
import { ColumnContainer, ColumnTitle, CardContainer } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}

      <AddNewItem
        dark
        toggleButtonText="+ Add another card"
        onAdd={console.log}
      />
    </ColumnContainer>
  );
};
