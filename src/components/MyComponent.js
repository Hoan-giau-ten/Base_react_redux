// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Hoan_giau_ten",
    address: "HoiDanIT",
    age: 22,
  };

  handleClick(event) {
    console.log("Click me my button");
    console.log(" My name is ", this.state.name);
  }

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I am form {this.state.address}. I'm{" "}
        {this.state.age} years old.
        <button onMouseOver={this.handleOnMoverOver}>Hover Me</button>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
