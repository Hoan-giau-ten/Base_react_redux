import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   // Hàm ẩn hiển (chú ý có dấu !)

//   // React class, phải có hàm constructor mới là chuẩn

//   render() {
//     console.log(">>call me render:");
//     // destructuring array/object
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     // props => viết tắt của properties
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name is {user.name}</div>
//                     <div>My age is {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  return (
    <div className="display-infor-container">
      {true && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
