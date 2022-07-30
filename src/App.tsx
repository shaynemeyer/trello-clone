import React from "react";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem
        dark
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
