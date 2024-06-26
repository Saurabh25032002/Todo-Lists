
import { MdDelete } from "react-icons/md";



import React, { useState } from 'react'

const Todos = () => {
    const [initial, setInitial] = useState();
    const [data, setData] = useState([])
    const [error, setError] = useState(false); // State for error message

    const getInput = (event) =>{
        console.log(event.target.value);
        setInitial(event.target.value)
    }
    // const getData = () =>{
    //     console.log(initial);
    //     let store = [...data, initial]
    //     setData(store)
    //     setInitial("")
    // }
    const getData = () => {
        if (initial.trim()) {
            setData([...data, initial]);
            setInitial("");
            setError(false); // Reset error state
        } else {
            setError(true); // Show error if input is empty
        }
    };
    const deleteTask = (index) =>{
        console.log(index);
        let filterData = data.filter((item, id)=>{
            return id != index                          
        })
        setData(filterData)
    }

    const clearAllTasks = () => {
        setData([]);
    };
    console.log(data);
  return (
     <>
        <div className='container'>
            <div className='inputTask'>
                <input type='text' placeholder='Enter Your Task' value={initial} onChange={getInput}/>
                <button onClick={getData}>Add</button>
                
                <button onClick={clearAllTasks} className="clearButton">Clear All</button>
            </div>
            {error && <p className="errorText">Please enter a task!</p>}
            {data.map((item, index)=>{
                return (
                    <>
                        <div className='taskData'>
                            <p>{item}</p>
                             <MdDelete id="deleteIcon" onClick={()=>deleteTask(index)} />
                        </div>
                    </>
                )
            })}
        </div>
     </>
  )
}

export default Todos