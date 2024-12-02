import React,{useState} from 'react'
function Welcome(){
 const[name,setName]=useState("")
 const[search,setSearch]=useState("")
 function updateName(){
 setName('IoT')
 }
 function updateSearch(event){
 setSearch(event.target.value)
 }
 return(
 <>
 <h1>Name :{name}</h1>
 <button onClick={updateName}>Click Me to change the Name</button>
 <p>Your Entered Name :{search}</p>
 <input type='text' placeholder='Enter Your Name' value={search}
onChange={updateSearch}/>
 </>
 )
}
export default Welcome;