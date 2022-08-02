import React from "react";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

function App() {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} id={list.id} key={list.id} />
      ))}

      <AddNewItem
        dark
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
