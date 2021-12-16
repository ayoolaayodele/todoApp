import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class todoList extends Component {
  render() {
    return (
      <ul className='list-group my-5'>
        <h3 className='text-capitalze text-center'> Todo List</h3>
        <TodoItem />
        <button
          type='button'
          className='btn btn-danger btn-block text-capitalize
        mt-5'>
          Clear List
        </button>
      </ul>
    );
  }
}
