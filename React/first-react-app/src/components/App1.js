
// import Card from "./components/Card";
// import { useState } from 'react'
// function App() {
//   //return <h1>Hello World</h1> //JSX syntax  FOR SINGLE LINE/ STATEMENT
//   //Props Passing Data to Parent to Child we cannot modify the props data
//   const [isToggled, setToggled] = useState(false);

//   const toogleMode = () => {
//     console.log("Hello")
//     setToggled(prev => !prev)
//     // isToggled=!isToggled;
//   }
//   const whiteMode = () => {
//     setToggled(true)
//   }
//   return (
//     <>
//       <button type="button" onClick={() => toogleMode()}>Light Mode</button>
//       <button type="button" onClick={() => whiteMode()}>Red Mode</button>

//       <Card name="Card1" cssColor={isToggled ? 'red' : ''} />
//       <Card name="Card2" cssColor={isToggled ? 'red' : ''} />
//       <Card name="Card3" cssColor={isToggled ? 'red' : ''} />
//       <Card name="Card4" cssColor={isToggled ? 'red' : ''} />
//       <Card name="Card5" cssColor={isToggled ? 'red' : ''} />
//     </>
//   )
// }





// export default App;