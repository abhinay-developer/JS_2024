import './App.css';
import Header from './components/Header';
import { useContext, useState } from 'react';
import A from './components/A';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './components/contexts/UserContext';

function App() {
  const [firstName, setFirstName] = useState('');
  const [user, setUser] = useState({ id: 1, name: "Rajkumar" })
  return (
    <>
      <BrowserRouter>
        <Header />
        <userContext.Provider value={user}>
          <A />
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
