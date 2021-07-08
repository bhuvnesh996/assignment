import React from 'react';
import  { useEffect,useState} from 'react'
import CardDetails from './CardDetails';

const MainCard = ({email,data}) =>{
  const [user,setUser] = useState([])

useEffect(()=>{
let filterData =  data.filter(data=>data.email===email)
    setUser(filterData)
},[data,email])


  return(

   <div className="w-50 justify-center pa4 ma2 br4 shadow-4 bg">
   {user.map((user)=>
      
      <CardDetails key =  {user.email} name = {user.name} email = {user.email} sex={user.gender} location={user.location}  picture={user.picture}   />
      
     )}
   </div>
 )
}

export default MainCard;
