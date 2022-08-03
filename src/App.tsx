import React from 'react';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';
import { CustomDragLayer } from './components/CustomDragLayer';
import { AppContainer } from './styles';

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column text={list.text} id={list.id} key={list.id} />
      ))}

      <AddNewItem
        dark
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
}

export default App;
