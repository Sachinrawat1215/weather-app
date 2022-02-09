import React from 'react';
// import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import EditPage from './Pages/EditPage';
import AdminRegisterPage from './Pages/AdminRegisterPage';
import AdminLoginPage from './Pages/AdminLoginPage';

const App = () => {
  return (
      <Routes>
          <Route path='/admin/login' element={<AdminLoginPage />} />
          <Route path='/admin/register' element={<AdminRegisterPage />} />
          <Route path='/edit' element={<EditPage />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
      </Routes>
  )
};

export default App;