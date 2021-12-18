import React from 'react';

const TodoInput = (props) => {
  const { item, handleChange, handleSubmit, editItem } = props;

  return (
    <div className='card card-body my-3'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text bg-primary text-white'>
              <i className='fas fa-book'></i>
            </div>
          </div>
          <input
            type='text'
            value={item}
            className='form-control text-capitalize'
            placeholder='Add a todo item'
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className={
            editItem
              ? 'btn btn-block btn-success mt-3'
              : 'btn btn-block btn-primary mt-3'
          }>
          {editItem ? 'edit item' : 'add item'}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
