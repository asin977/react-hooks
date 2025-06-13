import React,{ useEffect, useReducer, useState } from 'react';
import './Usage.css';

function valueReducer() {
   return 1;
}


function Usage() {
//   const [value,setValue] = useState(0);
  const [value,dispatch] = useReducer(valueReducer,0)
  const [color,setColor] = useState('white');
  const [boom,setBoom] = useState(false);

  useEffect(()=> {
       console.log('EFFECT1')
       return ()=> {
           console.log('Clean up1')
       }
    },[]) // only calls when mounted and unmounted.


    useEffect(()=> {
        console.log('EFFECT2')
        return ()=> {
            console.log('Clean up2')
        }
     },[]) ;

     useEffect(()=> {
        console.log('EFFECT3')
        return ()=> {
            console.log('Clean up3')
        }
     },[]) 
  return (
    <div>
       <div className='usage'>
            <div className='usage-item' style={{background:color}}>
                <button className='button' onClick = {()=> {
                    // setValue(value + 1)
                    dispatch();
                }}>Increment</button>
                <label className='white'>{value}</label>
                <button className='button' onClick = {()=> {
                    // setValue(value - 1)
                    dispatch();
                }}>Decrement</button>
                <button className = 'butt' onClick={()=> {
                    setColor('green')
                }}>Green</button>
                <button className='butt' onClick={()=> {
                    setColor('blue')
                }}>Blue</button>
            </div>
            {
                boom && value ?(
                    <div className='boom'>
                    <span>BOOM</span>
                </div>
                ) : null
            }
        </div>
    </div>
  )
}

export default Usage

// <button onClick={()=> {
//       setValue(state)=> {
    //  return state+1;
//}
// }}>Increment</button>
// Another method mainly used in the useState...

//javascript events
// 1)onClick
//2)onChange
//3)onMouseOver
//4)onLoad
//// React lifecylce
//1)Load(mount)
//2)Unload(Unmount)
//3)Update

// Props are used to pass the datas from one component to another.
// Context is the method of passing the data from one parent component to another component without  passing through all the child elements inside them.