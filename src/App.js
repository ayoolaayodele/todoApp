import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [input, setInput] = useState('');
  const [values, setValues] = useState({
    id: uuidv4(),
    items: [],
    editItem: false,
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      title: input,
    };

    //To keep track of the old state and passing in the new
    //state = spread operator
    const updatedItems = [...values.items, newItem];

    setValues({
      items: updatedItems,
      id: uuidv4(),
      editItem: false,
    });
    setInput('');
  };

  const clearList = () => {
    setValues({
      items: [],
    });
  };

  const handleDelete = (id) => {
    const { items } = values;
    const filteredItem = items.filter((item) => item.id !== id);
    setValues({
      items: filteredItem,
    });
  };

  const handleEdit = (id) => {
    const { items } = values;
    const filteredItem = items.filter((item) => item.id !== id);

    const selectedItem = items.find((item) => item.id === id);
    console.log(selectedItem);

    setValues({
      items: filteredItem,
      id: id,
      editItem: true,
    });
    setInput(selectedItem.title);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'>Todo input</h3>
          <TodoInput
            item={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={values.editItem}
          />
          <TodoList
            items={values.items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
