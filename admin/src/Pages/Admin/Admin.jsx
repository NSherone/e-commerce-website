import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  return (
    <Router>
      <div className="admin">
        <Sidebar />
          <Routes>
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/listproduct" element={<ListProduct/>} />
          </Routes>
      </div>
    </Router>
  );
};
export default Admin;
