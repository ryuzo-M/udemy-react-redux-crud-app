import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
    console.log(this.state)
  }

  handlePlus = () => {
    console.log("current counter= ", this.state.count);
    const currentCount = this.state.count;
    this.setState({count: currentCount + 1 })
    console.log("after plus counter= ", this.state.count);
  }

  handleMinus = () => {
    console.log("current counter= ", this.state.count);
    const currentCount = this.state.count;
    this.setState({count: currentCount - 1 })
    console.log("after minus counter= ", this.state.count);
  }

  render() {
    return (
      <div>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </div>
    )
  }
}

function App() {
  return <Counter></Counter>
}

export default App;
