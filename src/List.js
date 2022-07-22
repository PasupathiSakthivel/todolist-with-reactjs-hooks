import React from 'react';
import './list.css';

function List(props) {
  
    
    return (
        <div>

           { props.itemList.map(itemObj=>{
           return (
            <div className='item'>
                <p>{itemObj.item}</p>
              
             </div>
           ) ;
           })}

        </div>
    );
}

export default List;