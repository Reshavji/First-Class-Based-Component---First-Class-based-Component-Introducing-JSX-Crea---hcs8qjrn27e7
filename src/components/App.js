import React from 'react'
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      enrollmentNo: "12345678",
      age: 34
    };
  }

  increaseAge = () => {
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    const { name, enrollmentNo, age } = this.state; // Destructure state values
    return (
      <div>
        <h1>Hello, my name is {name}</h1>
        <p>I am {age} years old and my enrollment no is {enrollmentNo}</p>
        <button onClick={this.increaseAge}>Increase Age</button>
      </div>
    );
  }
}


export default App;
