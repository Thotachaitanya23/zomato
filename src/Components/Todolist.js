"use client";
import React, { useState } from 'react';

export default function Todolist() {

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
// To store all the task in array that is main task  we are taking main task usestate here to store all task here 
    const [mainTask, setMainTask] = useState([]);
//          Delect function

    const delectHandle=(i)=>{
        let copytask=[...mainTask]
        copytask.splice(i,1)
        setMainTask(copytask)
      }

    //   const editList=(i)=>{
    //         let edits=this.title.items.filter(item=>{
    //             item.id!==id);
    //             let selectedItems=this.title.items.find(items=>{
    //                 items.id==id);
    //                 this.settitle({
    //                       items:edits ;
    //                       item:selectedItems;
    //                 })
    //         })
    //   }

//       submitHandler

    const submitHandler=(e)=>{
         console.log(title);
         console.log(desc);
        //  e.preventDefault is use for not to defualt submission of form 
         e.preventDefault();
        //   settitle(""); setdesc(""); --->After submission to get empty array or text box we are setting our settitle to "" empty string if we set any word here means as soon as we submit our form then that word will pop out there 
         settitle("");
         setdesc("");
        //  ...mainTask--->  we use spread operator to get all previos main task here and in {} we are taking all title and desc by using ...mainTask we are taking all the previos value and by title and desc we are taking all title value and cesc value all 
         setMainTask([...mainTask,{title,desc}]);
         console.log(mainTask)
    }
let renderTask = <h2> No task is available to show 🫤🫤🫤</h2>;
// (mainTask.length>0)   --->   if there is no task and desc then to get "No task is available to show" we are giving "if (mainTask.length>0)""
if (mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
        // In Map Function we will take to parameter for example :- (t,i) "t" is current value and "i" is index to the value.
        return (
           <div>
            {/* key={i} is key value of react to get to know the key  */}
            {/* To show in the screen we are taking h4 tag and "t" that is current value to show on the screen */}

               <li key={i}>
               <h4>{t.title}</h4>
               <h4>{t.desc}</h4>

               {/* delete button */}
               <button onClick={()=>{
                delectHandle(i)
               }} className='del'>Delete </button>
               
               {/* edit button 
               <button onClick={()=>{
                editList(i)
               }}className='editBtn' >Edit </button>*/}
               
               </li>         
           </div>
       );
        })
}

  return (
    <>
    <div>
        <h1 className="firstline" >
          Chaitanya Todo list 🎅🎅🏼🎅
       </h1>
    </div>

    {/* Form starts from 59th line here */}
    {/* we are giving submitHandler to not to default submission */}

  <form onSubmit={submitHandler}>
     <span className='span'>Enter Text Here:     .............</span>
        <input className='input1' type='text' placeholder='Enter your text here' 
         value={title} 
         //    we are giving this " p.target.value " to get excat what value we are typing
         onChange={(e)=>{settitle(e.target.value)}}/>

         {/* break line </br> */}
                <br/>


    <span className='span'>Enter description Here:</span>
    <input className='input2' type='text' placeholder='Enter your Description here'  
        value={desc} 

    //    we are giving this " p.target.value " to get excat what value we are typing
         onChange={(p)=>{setdesc(p.target.value)}}/>
            <br/>
           
    <button className='btn' type='submit'  disabled={title&&desc?false:true} 
    >Add Task Here</button>
  
</form>
<hr/>
<div className='para'>
    {/* To render in paragraph we are giving rendertask  */}
    <ul>
      {renderTask}
    </ul>   
</div>
</>
  )
}
