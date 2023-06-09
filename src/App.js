import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './pages/SignIn/signin';
import SignUp from './pages/SignUp/signup';
import ResetPassword from './pages/ResetPassword/resetPassword';
import SignInTest from './pages/SignIn/__test__/signin';
import SignUpTest from './pages/SignUp/__test__/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInTest />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}

        <Route path="/signup" element={<SignUpTest />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
