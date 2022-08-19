import React from 'react';
import {useState} from 'react';
import List from './List';
import './list.css';

function App() {

  var [currentItem, setCurrentItem] = useState(null);
  var [itemList,updateItemList] = useState([]);

  var onChangeHandler = e =>{
    setCurrentItem(e.target.value);
  }

  var addItemsToList = () =>{
    updateItemList([...itemList,{item:currentItem, key:Date.now()}]);
    setCurrentItem("");
  };

  return (
    <div className='box'>

      <h2>To Do List, Using Hooks</h2>

      <input value={currentItem} onChange={onChangeHandler} />
      <button onClick={addItemsToList}> + </button>

      <List itemList={itemList} />

    </div>
  );
}

export default App;
