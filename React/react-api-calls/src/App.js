import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Header from './components/Header';
import User from './components/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='users' element={<Users />}></Route>
          <Route path='user/:uuid' element={<User />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
