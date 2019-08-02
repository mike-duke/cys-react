import React, { useState } from 'react';
import './Aside.css';

export const Aside = () => {
  const [title, setTitle] = useState('');
  const [itemInput, setItemInput] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const addTask = (e) => {
    e.preventDefault()
    setTasks([...tasks, <li>{itemInput}</li>]);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === 'title') {
      setTitle(value);
    } else if (name === 'item') {
      setItemInput(value);
    }
  }

  return (
    <aside>
      <form>
        <label htmlFor="title-input">ToDo Title</label>
        <input type="text" id="title-input" value={title} name="title" data-setter="setTitle" onChange={handleChange} />
        <section id="task-area">
          <ul id="aside-task-list">
            {tasks}
          </ul>
        </section>
        <label htmlFor="item-input">Task Item</label>
        <input type="text" id="item-input" value={itemInput} name="item" data-setter="setItemInput" onChange={handleChange} />
        <button onClick={addTask}>+</button>
        <button>Make Todo</button>
        <button>Clear All</button>
      </form>
      <hr/>
      <button>Filter By Urgency</button>
    </aside>
  )
}