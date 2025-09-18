import React, { useState } from 'react'


const App = () => {

let [count, setCount] = useState(1)

  let addValByOne = ()=>{
    setCount(count+=1)
    console.log(count);
    
  }
  let subValByOne = ()=>{
    setCount(count-=1)
    console.log(count);
    
  }
  return (
    <div>
      
    <p>count :{count}</p>
    

    <button onClick={addValByOne}>Add</button>
    <button onClick={subValByOne}>Sub</button>


    </div>
  )
}

export default App
