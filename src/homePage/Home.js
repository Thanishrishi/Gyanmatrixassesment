import './Home.css'
import Navbar from '../components/navbar';
import React from 'react';
import { useNavigate } from "react-router-dom";
function Home(){
 const Navigate = useNavigate();
    const Teacher = "Teacher";
    const Student = "Student";
    const format = ".png"
    const[student,setStudent] = React.useState(1);
    const[staff,setStaff] = React.useState(0);
    const items = [1,2,3,4,5,6];
    return(
        <div className='maincont'>
         <div className="navbar">
              <img src="/images/logoblack.png"/>
              <div className="select"> 
              <button onClick={()=>{setStudent(1); setStaff(0)}}>
             {student ?  <img src= "/images/studentlight.png"/> : <img src= "/images/studentbutton.png"/>}
              </button>
             
              <button onClick={()=>{setStaff(1); setStudent(0)}}>
              {staff ?  <img src= "/images/staffbutton.png"/> : <img src= "/images/stafflight.png"/>}
             
              </button>
             
              
              </div>

        </div>
            <div className='characterdiv'>
                <div className='characterbox'>

              {staff ? items.map((element,index)=>{
               return (
                <button onClick={()=>{Navigate('Detial',{
                    state : {
                        category : "staff",
                        number : element,
                    }
                })}}>
                <img src= {`/images/teachers/${Teacher + element +  format}`}></img>
                    
                </button>
               )
              }) : null}
              {student ? items.map((element,index)=>{
               return (
                <button onClick={()=>{Navigate('Detial',{
                    state : {
                        category : "student",
                        number : element,
                    }
                })}}>
                <img src= {`/images/students/${Student + element +  format}`}></img>
                </button>
               )
              }) : null}
                </div>
            </div>
        </div>
    )
}

export default Home;