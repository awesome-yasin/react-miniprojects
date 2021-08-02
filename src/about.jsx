import React, {useState, useEffect} from 'react';
import axios from 'axios'
const About = () => {

const [posts ,setPosts] = useState([])

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    console.log(res)
    setPosts(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
},[])

  return (
   <>
   <h2>API Fetching using axios</h2>
   <ul>
     {
       posts.map(post => <li key = {post.id}>{post.email}</li>
        )
     }
    
   </ul>
   <ul>
     {
       posts.map(postz => <li key = {postz.id}>{postz.name}</li>
        )
     }
    
   </ul>

   </>
     
   
  );
};
  
export default About;