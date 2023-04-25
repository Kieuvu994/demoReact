import { Alert } from 'bootstrap';
import './home.css';
import React,{ useState,useEffect } from 'react';
import Category from './Category';
const Home=()=> {
    useEffect(() => {
      }, [])
    const [disnon,setDisnon] = useState(true);
    const handleClick = () =>{
        disnon==true? setDisnon(false): setDisnon(true);
      }
    return (
        <>

           <button onClick={handleClick}>Click Me</button>


           <ul  style={{display: disnon?'inline':'none'}}>
            <li>1</li>
           </ul>
        </>
    )
}
export default Home