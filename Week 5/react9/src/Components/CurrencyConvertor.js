import React, { Component } from 'react';

export class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  // Event handler for form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submit action
    const amt = parseFloat(this.state.amount);
    
    if (!isNaN(amt)) {
      // 80 Euro * 80 = 6400 (matching the screenshot output)
      const converted = amt * 80;
      alert(`Converting to Euro Amount is ${converted}`);
    } else {
      alert('Please enter a valid amount');
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Amount: </label>
            <input
              type="text"
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Currency: </label>
            <textarea
              rows="2"
              value={this.state.currency}
              onChange={(e) => this.setState({ currency: e.target.value })}
            />
          </div>
          <button type="submit" style={{ marginLeft: '65px' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;