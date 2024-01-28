// class component
// function component
import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfo = ["ab", "bc", "cd"];

    return (
      <div>
        <Userinfor />
        <br /> <br />
        <DisplayInfor name="HoiDanIT" age="22" />
        <hr />
        <DisplayInfor name="Hoan_giau_ten" age={18} myInfo={myInfo} />
      </div>
    );
  }
}

export default MyComponent;
