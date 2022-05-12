import React, { Component } from 'react';
import Todo from './components/todo/Todo';
import './App.css';

class App extends Component {
  render(){
    return(
      <body>
       <div className='body'>
    <Todo/>
    </div>
    </body>
    )
  }

}


export default App;