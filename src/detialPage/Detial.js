import './Detial.css'
import {  useLocation } from 'react-router-dom';
import React from 'react';
import { House , Staff ,Student } from '../Data';
import axios from 'axios';
function Detial(){
 const location = useLocation();
 const [index,setIndex] = React.useState(0);
 const[person,setPerson] = React.useState('');
   
const category = location.state.category;
const num = location.state.number;
 React.useEffect(()=>{
    fetchdata();
 },[])

 async function fetchdata(){
   const response =  category === "student" ? await axios.get('https://hp-api.onrender.com/api/characters/students') : await axios.get('https://hp-api.onrender.com/api/characters/staff');
   const data =   await response.data;
   console.log(data)
  const particularPerson  = category === "student" ? data.find(element=> element.name ===Student[num]) : data.find(element=> element.name === Staff[num])
  setPerson(particularPerson);
  console.log(particularPerson.wand.wood)
  const index = House.findIndex(element=> element.name === particularPerson.house)
  setIndex(index)
 }
 
    return(
        <div style={{backgroundColor : House[index].background}} className='Maincontainer'>
          <div className="navbar">
              <img src="/images/logoblack.png"/>
            
        </div>
        <div className='centereddiv'>

        <div style={{backgroundColor : House[index].outercolor , boxShadow : House[index].boxshadow}} className='detialsdiv'>
            <div className='detialscont'>
            <div  style={{backgroundColor : House[index].innercolor}} className='innerbox' >
                <div className='left'>
                <div className='leftonly'>
                        <div className='leftbox'>
                        <h1>{person.name}</h1>
                </div>
                <div className='leftandright'>

                        <div className='left1'>
                        <h2>Species</h2>
                        <h2>Gender</h2>
                        <h2>House </h2>
                        <h2>DOB         </h2>
                        <h2>Anestry         </h2>
                        <h2>Eye colour         </h2>
                        <h2>Hair colour         </h2>
                        <h2>Wand         </h2>
                        <h2>Patronus         </h2>
                            
                        </div>
                <div className='left2'>
                        <h2>{person.species?person.species : "null"} </h2>
                <h2>{person.gender?person.gender:"null"}</h2>
                        <h2>{person.house?person.house:"null"} </h2>
                        <h2>{person.dateOfBirth?person.dateOfBirth:"null"}         </h2>
                        <h2>{person.ancestry?person.ancestry:"null"}</h2>
                        <h2>{person.eyeColour?person.eyeColour:"null"}  </h2>
                        <h2>{person.hairColour?person.hairColour:"null"}</h2>
                        <h2>Fir,dragonstring        </h2>
                        <h2>{person.patronus?person.patronus:"null"}         </h2>
                </div>
                </div>

                </div>

                </div>
                <div className='right'>
                <img src ={ person.image }></img>
                        </div>
            </div>
             </div>
        </div>
        </div>
        </div>
    )
}

export default Detial;