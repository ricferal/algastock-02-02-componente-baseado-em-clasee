import React,{useState,useEffect} from 'react'
import './TestComponent.css'

function TestComponent(props:{name: string}){
  const [age,setAge] =useState(42)

  useEffect(()=> {
     console.log('Component was created')

  },[])

  useEffect(()=> {
    console.log('Age has been update to: '+ age)

 },[age])


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