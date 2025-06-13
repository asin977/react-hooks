import React, { useReducer } from 'react';
import './Usage.css';
import usageReducer from '../reducers/usageReducer';

const initialState = {
  value: 0,
  color: 'white'
};

function Usage() {
  const [state, dispatch] = useReducer(usageReducer, initialState);

  return (
    <div className='usage'>
      <div className='usage-item' style={{ background: state.color }}>
        <button onClick={() => dispatch({ type: 'Increment' })}>
          Increment
        </button>
        <label>{state.value}</label>
        <button onClick={() => dispatch({ type: 'Decrement' })}>
          Decrement
        </button>
      </div>

      <button
        className='butt'
        onClick={() => dispatch({ type: 'ChangeColor', payload: 'green' })}
      >
        Green
      </button>
      <button
        className='butt'
        onClick={() => dispatch({ type: 'ChangeColor', payload: 'blue' })}
      >
        Blue
      </button>
    </div>
  );
}

export default Usage;
