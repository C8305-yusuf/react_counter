import {useState} from "react";

const Sayac = () => {
    const [counter, setCounter] = useState(0);
    
    const Artır = ()=>{
        setCounter(counter+1);
        
    }
    const Azalt = ()=>{
        setCounter(counter-1);

    }
    return (
    <div className='sayac'> 
        <button className='btn' onClick ={Artır}>+++</button>     
        <h2>{counter}</h2>
        <button className='btn'onClick = {Azalt}>---</button>
    </div>
    );
  }
  
  export default Sayac;