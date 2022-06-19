import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  const isAuthenticated = false;
      
  if (isAuthenticated ) {
    return children
  }
    
  return <Navigate to="/login" />
}
