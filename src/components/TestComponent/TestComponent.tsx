import React,{useState} from 'react'
import './TestComponent.css'

function TestComponent(props:{name: string}){
  const [age,setAge] =useState(42)

  

  return  <div className="TestComponent">
      Olá, {props.name},{age}
      <button onClick = { ()=>{
        setAge(age + 1)
      }
      }>
        +

      </button>
  </div>

}

// const TestComponent = () => (
//   <div className="TestComponent">Test Component!!!!</div>
// )

export default TestComponent