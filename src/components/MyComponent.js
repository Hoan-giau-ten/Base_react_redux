// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Hoan_giau_ten",
    address: "HoiDanIT",
    age: 22,
  };

  handleClick = (event) => {
    console.log("Click me my button");
    //merge state => react class

    // console.log(" random ", Math.floor(Math.random() * 100 + 1));
    this.setState({
      name: "Hoan_Bui",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMoverOver(event) {
    // console.log(event.pageX);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I am form {this.state.address}. I'm{" "}
        {this.state.age} years old.
        <button onMouseOver={this.handleOnMoverOver}>Hover Me</button>
        <button onClick={(event) => this.handleClick(event)}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
