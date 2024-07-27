import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ViewUsers from './components/ViewUsers';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='login' element={<Login />}></Route>
          <Route path='create-account' element={<CreateAccount />}></Route>
          <Route path='update-account/:id' element={<CreateAccount />}></Route>
          <Route path='view-users' element={<ViewUsers />}></Route>
          <Route path='home' element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
