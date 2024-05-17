// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import'./Ass.css'
import axios from 'axios'

const Assignment = () => {
  const payload={
  postId:100,
  id:56,
  email:"oluwadami@gmail.com",
  name:"mercy"
  }
  const [facts, setFacts] = useState([]);
  const[datum,setDatum]= useState([]);  
  const [name,setName] = useState();
  const [email,setEmail]=useState();
  const[loading,setLoading]=useState('false')

  
  

  

  useEffect(() => {
    const fetchFact = () => {
        return fetch('https://catfact.ninja/facts')
            .then(response => response.json())
            .then(data => setFacts(data.data.slice(0,15)))
            .catch(error => 
                console.log('Error fetching data:', error));
            }
    

    fetchFact();
}, []);

useEffect(()=>{
 
  const URL ="https://jsonplaceholder.typicode.com/users"
  const fetchUsers = async()=>{
    try{
      const response = await axios.get(URL)
      console.log('hello:', response);
      setDatum(response.data)
    }
    catch(e){
      console.log('error', e);
    }
  }
  fetchUsers()
},[])

const handleApicall=()=>{
  const url="https://jsonplaceholder.typicode.com/comments"
  fetch(url,{
    method:'POST',
    headers:{
      'content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body:JSON.stringify(payload)
  })
  .then(response=>console.log('this is a response:', response))
  .then(data=>console.log('this is the data:', data))
  .catch(err=> console.log('error', err))
  
}
handleApicall()



const handleFetchdata=async(e)=>{
e.preventDefault()
const url=''
const payload={
name:name,
email:email
}
  try{
const res= await axios.post(url,payload)
if(res.status===200)
  {
setLoading(!loading)
setName(res.data.data.username)
setEmail(res.data.data.email)

  }
  }catch(e){
    console.log();
  }
}
if(!loading){
  return <h1>loading....</h1>
}




  
  return (
    <div className="App">
      <div className="card-container">
        {facts.map((fact, index) => (
          <div key={index} className="card">
            <p>{fact.fact}</p>
            </div>
        ))}
            <h1>Users</h1>
            <ul>
                {datum.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
          </div>
       <form onSubmit={handleFetchdata}>
        <label htmlFor=""></label>
        <input type="text" />
        <button type='submit'></button>
       </form>
    </div>
  );

}
export default Assignment;