// class component
// function component
import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoan_giau_ten", age: 22 },
      { id: 2, name: "Hoan", age: 15 },
      { id: 3, name: "Hoan_Bui", age: 69 },
    ],
  };
  //JSX
  render() {
    //DRY: don't repert yourseft
    return (
      <div>
        <Userinfor />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
