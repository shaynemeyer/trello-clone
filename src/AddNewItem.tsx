import React from 'react';
import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState(false);
  const { onAdd, toggleButtonText } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>;
};
