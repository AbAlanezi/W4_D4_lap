import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function UpdatData() {
    const [nam , setName] = React.useState("")
    const [id, setId] = React.useState<any>('')

   React.useEffect(() => {
       setId(localStorage.getItem("id"))

    })
    const api = `https://63e21e03109336b6cbffdd5b.mockapi.io/lap/api/${id}`

  const update = () =>{
    if(nam.length >=3  ){
        
        axios.put(api,{
            nam,

        }).then(res=>{
            console.log(res);
        })
        axios.get(api)
    }else{
        alert("Please inter correct information")
    }

  }
  return (
    <div className='feldinput'>
        <h1>Update</h1>
        <input className='plac' placeholder='Name' onChange={e =>{setName(e.target.value)}}></input><br />
        <Link to='/'>
        <button className='button' onClick={update}>Update</button>
        </Link>
    </div>
  )
}

export default UpdatData
