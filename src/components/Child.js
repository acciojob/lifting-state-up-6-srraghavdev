import React,{useState} from 'react'
 let Child= (props)=>{
    function changestate(data){
        let x=[...props.table]
        for(let i=0;i<x.length;i++){
            if(x[i].content==data){
                x[i].done=true
            }
        }
        props.set(x)
    }
    return(
        <div className='child'> Child Component
            <ul>
                {props.table.map(element=>{
                    return(<li> {element.content}
                        {element.done==false ?<button onClick={()=>{changestate(element.content)}}>Complete</button> : <></>}
                        </li> 
                     )
                })}
            </ul>
        </div>
    )
 }
 export default Child