import React from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Navbar from './Components/Navbar';
import ViewUsers from './Components/ViewUsers';
import ShubhamPofile from './Components/ShubhamsProfile';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<ShubhamPofile/>}/>
     <Route path='/view' element={<ViewUsers/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/> 
     
     
     </Routes>
  
    </BrowserRouter>
  );
}

export default App;
