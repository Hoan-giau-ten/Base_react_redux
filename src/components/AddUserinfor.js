import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "HoiDanIT",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSumit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
// <div>
//   My name is {this.state.name} and I am form {this.state.address}. I'm{" "}
//   {this.state.age} years old.
//   <form onSubmit={(event) => this.handleOnSumit(event)}>
//     <label>Your name: </label>
//     <input
//       value={this.state.name}
//       type="text"
//       onChange={(event) => this.handleOnChangeInput(event)}
//     />

//     <label>Your Age: </label>
//     <input
//       value={this.state.age}
//       type="text"
//       onChange={(event) => this.handleOnChangeAge(event)}
//     />
//     <button>Submit</button>
//   </form>
// </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  // state = {
  //       name: "",
  //       address: "HoiDanIT",
  //       age: "",
  //     };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };

  const handleOnSumit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I am form {address}. I'm {age} years old.
      <form onSubmit={(event) => handleOnSumit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />

        <label>Your Age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
