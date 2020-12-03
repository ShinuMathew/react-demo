import React, {useState} from 'react';
// import Hello from './sayHello'
import Tweet from './Tweet';
import './App.css'

/**
 * To create a component
 * - Default component creation
 * - return() => return something like this internally "React.createElement(div)" using JSX
 */
function App1() {
  const sayHello = () => {
      console.log("Hello");
  }
  // JSX
  return(
    <div>
      <h1>Hello React</h1> 
      <button onClick={sayHello}>Hello</button>
    </div>
  )
}


/**
 * To create a component
 * - Creating component in a different file and importing it in App()
 */
function App2() {
  return(
    <div>
      {/* <Hello/> */}
    </div>
  )  
}

/**
 * Tweets app with props example7
 */
function App3(){
  return(
    <div className='app'>
      <Tweet name="Shinu" tweet="Hey guys!!" likes="10"/>
      <Tweet name="Shibu" tweet="Hello everyone!!" likes="12"/>
      <Tweet name="Sunil" tweet="Hello :) Good to see you all!!" likes="27"/>
      <Tweet name="Anil" tweet="Yoooo whatsup buoyss!!" likes="30"/>
    </div>
  )
}

/**
 * REACT STATE: Example 1
 */
function App4() {

  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const increement = () => {
    setCount(count + 1)
    setRed(!isRed)
  }
  return(
    <div className='app'>
      <h1 className={isRed ? 'red' : ""}>Change my colour!!</h1>
      <button onClick={increement}>Increement</button>
      <h1>{count}</h1>
    </div>
  )
}

/**
 * REACT STATE: Tweet example
 */
function App() {

  const [users, setUsers] = useState([
    {name: 'Sam', message: "Hey guys! Lets meet up", likes : 20},
    {name: 'Reena', message: "Sure what time?", likes : 10},
    {name: 'Shilpa', message: "Cool!! I am in", likes : 23},
    {name: 'John', message: "I'm not sure guys. Got some pending works", likes : 31}
  ])

  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name = {user.name} tweet = {user.message} likes = {user.likes}/>
      ))}
    </div>
  )
}

export default App;