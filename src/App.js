import './App.css';

import React, { Component } from 'react'
import ListItem from './components/ListItem';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }
    }
  }
  
  handleInput = (event) => {
    this.setState({
      currentItem:{
        text:event.target.value,
        key:Date.now()
      }
    })
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem = (key) => {
    const filterItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filterItems
    })
  }

  setUpdate = (text, key) => {
    const items = this.state.items;

    items.map(item => {
      if(item.key === key){
       item.text = text
      }
      return item
    })

    this.setState({
      items:items
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input type='text' placeholder='Enter text here' value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type='submit'>+ Add</button>
          </form>
        </header>
        <ListItem items={this.state.items} deleteItem = {this.deleteItem} setUpdate = {this.setUpdate}/>
      </div>
    )
  }
}

export default App;
