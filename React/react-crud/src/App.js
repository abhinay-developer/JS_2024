import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ViewUsers from './components/ViewUsers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='login' element={<Login />}></Route>
          <Route path='create-account' element={<CreateAccount />}></Route>
          <Route path='view-users' element={<ViewUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
