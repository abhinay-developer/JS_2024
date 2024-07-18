import React, { useState } from "react";

function App() { //Parent Component
  // return <h1>Hello World</h1>     //SINGLE STATMENT
  //Props (Properties)  Passing Data to Parent to Child  we cannot edit props data
  // let counter=0;

  // const myState = useState(false);
  // console.log(myState);
  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState('Narender');
  const [lastName, setLastName] = useState('Reddy');


  const incriment = () => {
    //  counter=counter+1
    setCounter((prev) => prev + 1);
    setFirstName("Rajkumar")
  }

  const descriment = () => {
    // counter=counter-1;
    setCounter((prev) => prev - 1);
    setLastName("Sena");
  }
  const users = [
    { name: "Kiran Kumar", description: "Java Developer", email: "kiran@gmail.com" },
    { name: "Sai Kumar", description: "React Developer", email: "sai@gmail.com" },
    { name: "Raj Kumar", description: "Angular Developer", email: "raj@gmail.com" },
    { name: "vamshi Kumar", description: "Python Developer", email: "vamshi@gmail.com" },
    { name: "john Kumar", description: "Nodejs Developer", email: "john@gmail.com" }
  ]
  return (
    // <></>  Fragments
    // <React.Fragment></React.Fragment>
    <div>
      {/* <Profile name="Kiran Kumar" description="Java Developer" email="kiran@gmail.com" />
      <Profile name="Sai Kumar" description="React Developer" email="sai@gmail.com" />
      <Profile name="Raj Kumar" description="Angular Developer" email="raj@gmail.com" />
      <Profile name="vamshi Kumar" description="Python Developer" email="vamshi@gmail.com" />
      <Profile name="john Kumar" description="Nodejs Developer" email="john@gmail.com" /> */}
      {/* {
        users.map((user) => <Profile name={user.name} description={user.description} email={user.email} />)
      } */}
      <h1>Welcome to useState()</h1>
      <div>
        <div>{counter}</div>
        <div>{firstName},{lastName}</div>
        <button type="button" onClick={() => incriment()}>Incriment</button>
        <button type="button" onClick={() => descriment()}>Decriment</button>
      </div>
    </div>
  )
}

function Profile(props) { //Child Component
  return (
    <div className="profile-card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h4>{props.email}</h4>
    </div>
  )
}

export default App;