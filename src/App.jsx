import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import DueDateInput from './components/DueDateInput';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dueDate: '04 Dec 2019',
    };
    this.setNewDueDate = this.setNewDueDate.bind(this);
  }

  setNewDueDate(dueDate) {
    this.setState({ dueDate });
    // console.log(dueDate);
  }

  handleChangeDuedate(newDueDate) {
    const dueDate = Date.parse(newDueDate);
    this.setState({ dueDate });
  }

  render() {
    return (
      <div className="App">
        <Header headerText="Count Down App" />
        <DueDateInput
          onClick={this.setNewDueDate}
        />
        <Clock dueDate={this.state.dueDate} />
      </div>
    );
  }
}

export default App;
