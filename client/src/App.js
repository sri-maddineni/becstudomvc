import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import { Pagenotfound } from "./pages/Pagenotfound"


import { Toaster } from 'react-hot-toast';

import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import AuthState from './context/AuthState';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';

import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';

import Profile from './pages/user/Profile';





import AddHostel from './pages/admin/AddHostel';
import PreviousPapers from './pages/nonLoggedin/PreviousPapers';
import AddPaper from './pages/admin/AddPaper';
import PlacementMaterials from './pages/user/PlacementMaterials';
import Users from './pages/admin/Users';





function App() {
  return (
    <>
      <AuthState>
        <Toaster />

        <Routes>
          <Route path='/' element={<Homepage />} />



          //private routes

          <Route path='/user' element={<PrivateRoute />}>
            <Route path=':regno/profile' element={<Profile />} />
          </Route>

          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='user' element={<Dashboard />} />
            

            
          </Route>

          <Route path='/dashboard' element={<AdminRoute />}>
            <Route path='admin' element={<AdminDashboard />} />
            <Route path='admin/add-hostel' element={<AddHostel />} />
            <Route path='admin/add-paper' element={<AddPaper />} />
            <Route path='admin/users' element={<Users />} />
            
            
          </Route>


          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/previous-papers' element={<PreviousPapers />} />
          <Route path='/placement-materials' element={<PlacementMaterials />} />



          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Pagenotfound />} />

         
        </Routes>

      </AuthState>
    </>


  );
}

export default App;
