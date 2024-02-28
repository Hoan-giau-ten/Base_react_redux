import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoan_giau_ten", age: 22 },
//       { id: 2, name: "Hoan", age: 15 },
//       { id: 3, name: "Hoan_Bui", age: 69 },
//     ],
//   };

//   handleAddNewUser = (usersObj) => {
//     this.setState({
//       listUsers: [usersObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   //JSX
//   render() {
//     //DRY: don't repert yourseft
//     return (
//       <>
//         <AddUserinfor handleAddNewUser={this.handleAddNewUser} />
//         <br /> <br />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoan_giau_ten", age: 22 },
    { id: 2, name: "Hoan", age: 15 },
    { id: 3, name: "Hoan_Bui", age: 69 },
  ]);

  const handleAddNewUser = (usersObj) => {
    setListUsers([usersObj, ...listUsers]);
    // this.setState({
    //   listUsers: [usersObj, ...this.state.listUsers],
    // });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };

  return (
    <>
      <div className="a">
        <AddUserinfor handleAddNewUser={handleAddNewUser} />
        <br /> <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
