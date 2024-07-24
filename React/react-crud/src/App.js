import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='login' element={<Login />}></Route>
          <Route path='create-account' element={<CreateAccount />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
