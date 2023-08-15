// import React,{useState} from 'react'
//  let Child= (props)=>{
//     function changestate(data){
//         let x=[...props.table]
//         for(let i=0;i<x.length;i++){
//             if(x[i].content==data){
//                 x[i].done=true
//             }
//         }
//         props.set(x)
//     }
//     return(
//         <div className='child'> Child Component
//             <ul>
//                 {props.table.map(element=>{
//                     return(<li> {element.content}
//                         {element.done==false ?<button onClick={()=>{changestate(element.content)}}>Complete</button> : <></>}
//                         </li> 
//                      )
//                 })}
//             </ul>
//         </div>
//     )
//  }
//  export default Child
import React from 'react';

const Child = ({ todos, onTodoComplete }) => {
  return (
    <div className='child'>
        
        <ul>
        <h2>Child Component</h2>
        {todos.map(todo => (
            <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            {!todo.completed && <button onClick={() => onTodoComplete(todo.id)}>Complete</button>}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default Child;