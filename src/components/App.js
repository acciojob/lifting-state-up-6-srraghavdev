
import React,{useState} from "react";
import './../styles/App.css';
import { Children } from "react/cjs/react.production.min";
import Child from './Child'

const App = () => {
  let [todos,Settodos]=useState([{content:'Learn React',done:false},{content:'Build a React app',done:false},{content:'Deploy the React App',done:false}])
  return (
    <div className='parent'>
      <div>Parent Component</div>
        <Child table={todos} set={Settodos}/>
    </div>
  )
}

export default App
