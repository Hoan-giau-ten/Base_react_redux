// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Hoan_giau_ten",
    address: "HoiDanIT",
    age: 22,
  };
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I am form {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
