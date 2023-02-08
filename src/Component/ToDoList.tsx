import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Link} from 'react-router-dom'


function ToDoList() {
    const [nam , setName] = React.useState("")
    const [data, setData] = React.useState<any[]>([])
    const [id, setId] = React.useState<any>('')

    const api = "https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api"
    const apiU = `https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api/${id}`
    const PostData = ()=>{
        if(nam.length >=3  ){
            
            axios.post(api,{
                nam
     
            }).then(res=>{
                console.log(res);
                localStorage.setItem("id", res.data.id)
            })
            axios.get(api)
        }else{
            alert("Please inter correct information")
        }
    }
    
    React.useEffect(() => {
        axios.get('https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api').then(res=>{
            setData(res.data)
            console.log(res.data)
        })
    
        }, [])
        const deletItem=(id: any)=>{
            console.log(id)
            axios.delete(`https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api/${id}`).then(res=>{
                setData(data.filter((del)=> del.id !=id))
            })
        }
        React.useEffect(() => {
            setId(localStorage.getItem("id"))
     
         })

  return (
    <div>
      
     <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." onChange={e =>{setName(e.target.value)}}></input>
        <span  className="addBtn" onClick={PostData}>Add</span>
      </div>
      {data.map((item: any)=> (
         <div>
      <ul id="myUL">
      <li>{item.nam} <button className='But'  onClick={()=>{deletItem(item.id)}}>Delet</button>
                <Link to='/update'>
                <button className='button' onClick={()=>localStorage.setItem("id",item.id)}>Update</button>
             </Link></li>
      </ul>

             
        </div>)
      )}

    </div>
  )
}

export default ToDoList
