import { useState } from "react";
function App() {
  const [users, setUsers] = useState([
    {
      name: 'asilbek',
      password: '12345',
      age: 14
    },
    {
      name: 'eric',
      password: '45678',
      age: 18
    },
    {
      name: 'karl',
      password: '12457',
      age: 25
    },
    {
      name: 'bob',
      password: '7465',
      age: 35
    },
    {
      name: 'jimmy',
      password: '8632',
      age: 12
    }
  ]);



  return (
    <div className="App">
     <table border={1} cellSpacing={0}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((val, ind) => (
           <tr key={ind}>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.password}</td>
           </tr>
          ))
        }
      </tbody>
     </table>     
    </div>
  );
}

export default App;
