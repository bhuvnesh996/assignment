import React, { useEffect,useState } from 'react'
 import axios from 'axios'
import Card from './Card'
import Navbar from './Navbar'
import MainCard from './MainCard'
import './App.css'
// Make a request for a user with a given ID


function App() {
  const [data,setData] = useState([])
  const [email,setEmail] = useState('')



  useEffect(()=>{
   axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
  .then(function (res) {
      return res.data;
  })
  .then(function(res){
    setData(res.results)

 


  })
  },[])
console.log('set email')
console.log(email)

  
  



 


  return (
    <div className="App">
    <Navbar />
    <div className="flex flex-wrap justify-center">
        <MainCard email={email} data={data} />
    </div>
    <div className = "flex flex-wrap justify-center grab" >
      {data.map((user)=>
      
       <Card key =  {user.email} name = {user.name} email = {user.email} sex={user.gender} nat={user.nat} setEmail={setEmail} />
       
      )}
  
      </div>
    </div>
  );
}

export default App;
