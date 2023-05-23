import './App.css';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { useContext } from "react";
import {AuthContext} from "./context/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Forgot from './pages/Forgot';


function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forgot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
