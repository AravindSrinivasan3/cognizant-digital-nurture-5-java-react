import React, { Component } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // 1. Invokes multiple methods: increments counter & shows alert
  handleIncrement = () => {
    this.incrementCount();
    this.sayHello();
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sayHello = () => {
    alert('Hello! Member1');
  };

  // Decrement Handler
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // 2. Invokes function with parameter "welcome"
  sayWelcome = (message) => {
    alert(message);
  };

  // 3. Synthetic Event Handler
  handleClick = (e) => {
    // Uses synthetic event parameter 'e'
    alert('I was clicked');
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        {/* Displays Counter Value */}
        <h2>{this.state.count}</h2>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100px', gap: '5px' }}>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
          <button onClick={this.handleClick}>Click on me</button>
        </div>

        <br />

        {/* Currency Converter Section */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;