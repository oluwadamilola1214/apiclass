// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Form = () => {
  const [user, setUser] = useState([]);
  
  useEffect(()=>{

          const FetchData = ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(responses =>responses.json())
            .then(data => {
              console.log(data);
              setUser(data)

            })
          }
          FetchData();
  }, [])

  
  return (
    <>
    <table>
        <thead>
      <tr>      
      <th>id:</th>
      <th> Name:</th>
      </tr>
      </thead>
        {user.map(user=>(
      <tr key={user.id}>

        
        <td >
          {user.id}
        </td>
        
        <td> 
          {user.name}
        </td>
      </tr>
      ))}
    </table>
    </>
  );
};

export default Form
