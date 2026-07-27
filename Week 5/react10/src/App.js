import React, { Component } from 'react';

// Functional Component for User Greeting
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Functional Component for Guest Greeting
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Conditional Greeting Component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Login Button Component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout Button Component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Main Component handling State and Element Variables
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    // Element Variable declaration
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ padding: '50px' }}>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default App;