import React, { Component } from 'react';

class DueDateInput extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  handleClick() {
    console.log('Pressed!!');
    this.props.onClick(this.state.inputValue);
  }

  handleInputValueChange(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue });
    console.log('----------');
    console.log('state', this.state);
    console.log('inputValue', inputValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputValueChange}
        />
        <button onClick={this.handleClick}>Coundown</button>
      </div>
    );
  }
}

export default DueDateInput;
