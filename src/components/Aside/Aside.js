import React from 'react';
import './Aside.css';

export const Aside = () => {
  return (
    <aside>
      <form>
        <label htmlFor="title-input">ToDo Title</label>
        <input type="text" id="title-input"/>
        <label htmlFor="item-input">Task Item</label>
        <input type="text" id="item-input"/>
        <button>+</button>
        <button>Make Todo</button>
        <button>Clear All</button>
      </form>
      <hr/>
      <button>Filter By Urgency</button>
    </aside>
  )
}