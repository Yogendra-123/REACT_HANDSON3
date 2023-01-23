import React from 'react'
import './FunctionComponent.css'
import { useState } from 'react';

function FunctionComponent() {

  const [myHome, setmyHome] = useState(false)
  const [state, setState] = useState(
    {
      Name : "",
      Department: "",
      Rating: '',
      employees: []
    }
  )
function BackBtn(){
  setmyHome((prevValue) =>{
    return !prevValue
  })
}
const changeHandler = (e) =>{
  setState({...state, [e.target.name]: e.target.value})
}

const submitbtnHandler = (e) =>{
  e.preventDefault();
  const empObj = {
    Name: state.Name,
    Department: state.Department,
    Rating: state.Rating
  }
  const temp = state.employees;
  temp.push(empObj);
  console.log(temp);
  setState({employees:temp});
  BackBtn();
  document.getElementById('formsreset').reset();
}
if (myHome){
  return (
    <div>
      {
        state.employees.map((value, index)=>{
          return (
            
              <span key={index} id='spancontainer'>Name :{value.Name}| Department : {value.Department}| Rating :{value.Rating}</span> 
            
          )
        })
      }

<br/><button onClick={BackBtn} className='gobackbtn'>Go Back</button>
    </div>
  )
}
else{

  return (
    <>
   
    <div><h1><span>
        EMPLOYEE FEEDBACK FORM
        </span></h1></div>
    <form action="" id='formsreset'>
        <label htmlFor="">Name :</label>
        <input type="text" placeholder='Name' name='Name' onChange={changeHandler} value={state.employees.Name}/> <br/>
        <label htmlFor="">Department :</label>
        <input type="text" placeholder='Department' name='Department' onChange={changeHandler} value={state.employees.Department}/> <br/>
        <label htmlFor="">Rating :</label>
        <input type="number" name='Rating' onChange={changeHandler} value={state.employees.Rating}/> <br />
        <button onClick={submitbtnHandler}>Submit</button>
    </form>
    
    </>
  )
}
}
export default FunctionComponent;