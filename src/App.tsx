import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ToDoList from './Component/ToDoList'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import UpdatData from './Component/UpdatData'
function App() {

  return (
    <div className="App">
       {/* <ToDoList/> */}
       <Routes>
        <Route path="/" element={<ToDoList />}></Route>
        <Route path="/update" element={<UpdatData />}></Route>
      </Routes>
    </div>
  )
}

export default App
