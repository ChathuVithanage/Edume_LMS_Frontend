import './App.css'
import React from "react";
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import Home_Page from './pages/Home_Page';
import SignIn_Page from './pages/SignIn_Page';
import SignUp_Page from './pages/SignUp_Page';
import Teacher_dashbord from './pages/Teacher/Teacher_dashbord';
import Student_dashbord from './pages/Student/Student_dashbord';
import Admin_dashbord from './pages/Admin/Admin_dashbord';
import S_EditProfile from './pages/Student/S_EditProfile';
import S_AccessCourcesPage from './pages/Student/S_AccessCourcesPage';
import S_AnnouncementsPage from './pages/Student/S_AnnouncementsPage';
import S_AssingmentPage from './pages/Student/S_AssingmentPage';
import S_EntrolledCouecesPage from './pages/Student/S_EntrolledCouecesPage';
import S_PersonalResultPage from './pages/Student/S_PersonalResultPage';
import Courses_Page from './pages/Courses_Page';
import { useAuthContext } from './hooks/useAuthContext';
import S_PaymentSlip from './pages/Student/S_PaymentSlip';
import T_AssigmentUpload from './pages/Teacher/T_AssignmentUpload';
import AboutUs_Page from './pages/AboutUs_Page';
import S_UploadAssignmentWork from './pages/Student/S_UploadAssignmentWork';


function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home_Page/>}/>
          <Route exact path="/signInPage"  element={!user ? <SignIn_Page/> : 
                                                    user.role === "Admin" ? <Navigate to="/a_dashbord"/> :
                                                    user.role === "Student" ? <Navigate to="/s_dashbord"/> :
                                                    <Navigate to="/t_dashbord"/>} />
          <Route exact path="/signUpPage"  element={!user ? <SignUp_Page/> : <Navigate to="/signInPage"/>} />  
          <Route exact path="/coursesPage"  element={<Courses_Page/>} />
          <Route exact path="/aboutUs"  element={<AboutUs_Page/>} />
          <Route exact path="/t_dashbord"  element={user ? <Teacher_dashbord/> : <Navigate to="/signInPage"/>}/>
          <Route exact path="/s_dashbord"  element={user ? <Student_dashbord/> : <Navigate to="/signInPage"/>}/>
          <Route exact path="/a_dashbord"  element={user ? <Admin_dashbord/> : <Navigate to="/signInPage"/>}/>
          <Route exact path='/s_dashbord/s_editProfile' element={<S_EditProfile/>}/>
          <Route exact path='/s_dashbord/s_accessCourcesPage' element={<S_AccessCourcesPage/>}/>
          <Route exact path='/s_dashbord/s_announcementsPage' element={<S_AnnouncementsPage/>}/>
          <Route exact path='/s_dashbord/s_assingmentPage' element={<S_AssingmentPage/>}/>
          <Route exact path='/s_dashbord/s_entrolledCouecesPage' element={<S_EntrolledCouecesPage/>}/>
          <Route exact path='/s_dashbord/s_personalResultPage' element={<S_PersonalResultPage/>}/>
          <Route exact path='/s_PaymentSlip' element={<S_PaymentSlip/>}/>
          <Route exact path='/t_dashboard/t_AssignmentUpload' element={<T_AssigmentUpload/>}/>
          <Route exact path='/s_dashbord/s_assingmentPage/s_UploadAssignmentWork' element={<S_UploadAssignmentWork/>}/>
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
