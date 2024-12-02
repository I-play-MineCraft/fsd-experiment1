import React,{useState} from 'react'
function Form(){
 const[user,setUser]=useState({
 name:"Khanishni",
 age:13,
 gender:"Female",
 isMarried:false
 });
 function changeHandle(e){
 const name=e.target.name
 const value=e.target.type==="checkbox"?e.target.checked : e.target.value
 setUser({...user,[name]:value})
 }
 return(
 <>
 <table>
 <tbody>
 <tr>
 <td>Name</td>
 <td>{user.name}</td>
 </tr>
 <tr>
 <td>Age</td>
 <td>{user.age}</td>
 </tr>
 <tr>
 <td>Gender</td>
 <td>{user.gender}</td>
 </tr>
 <tr>
 <td>Martial Status</td>
 <td>{user.isMarried ? "Married":"Un Married"}</td>
 </tr>
 </tbody>
 </table>
 <form >
 <br />
 <input type="text" placeholder='enter your name' value={user.name}
 onChange={changeHandle} name='name' /> <br />
 <br />
 <input type="number" placeholder='Your Age' value={user.age}
onChange={changeHandle} name='age' />
 <div className='gender'> <br />
 <label htmlFor="male"> <input type="radio" name='gender' id='Male' value='Male'
checked={user.gender==='Male'} onChange={changeHandle}/>Male</label>
<br/>
 <label htmlFor="female"> <input type="radio" name='gender'
id='Female'value='Female' checked={user.gender==='Female'}
onChange={changeHandle} />Female</label> <br />
 </div>
 <input type="checkbox" id='isMarried' checked={user.isMarried}
onChange={changeHandle} name='isMarried'/>
 <label htmlFor="isMarried">Is Married?
 </label>
 </form>
 </>
 )
}
export default Form;
