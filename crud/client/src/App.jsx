import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [task, setTask] = useState("");

  const handleSub = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/v1/add", { task })
    console.log(res);
  }
  return (
    <div>
      <h1>Add Task</h1>

      <form>
        <input type="text" onChange={(e) => { setTask(e.target.value) }} />
        <button onClick={handleSub}>add</button>
      </form>
    </div>
  )
}

export default App