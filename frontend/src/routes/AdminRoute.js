import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
    const token = localStorage.getItem('@metaverse/token')
    const userDetails = JSON.parse(localStorage.getItem("@metaverse/userDetails"))

    if (token) {
      const isUserAdmin = userDetails.roles.find(role => role.name === 'ROLE_ADMIN')

      if (isUserAdmin) return children
      
      return <Navigate to="/" /> 
    }
      
    return <Navigate to="/login" /> 
  }