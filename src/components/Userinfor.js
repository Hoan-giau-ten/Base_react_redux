import React from "react";

class Userinfor extends React.Component {
  state = {
    name: "Hoan_giau_ten",
    address: "HoiDanIT",
    age: 22,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSumit = (event) => {
    alert("me");
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I am form {this.state.address}. I'm{" "}
        {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSumit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>

          <label>Your Age: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Userinfor;
