import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return (
        <div className='listContainer'>
            {
                props.items.map(item => {
                return <div className='list' key={item.key}>
                    <input type='text' id={item.key} value={item.text} onChange={(event) => props.setUpdate(event.target.value, item.key)}/>
                    <i className='fa fa-minus-square' onClick={() => {props.deleteItem(item.key)}}></i>
                    </div>
                })
            }
        </div>
    )
}

export default ListItem
