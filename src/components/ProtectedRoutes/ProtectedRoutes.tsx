import { Navigate, Outlet } from "react-router-dom";
// import Register from "../pages/Register/Register";

interface Props {
   isLoggedIn: boolean;
}

const ProtectedRoutes: React.FC<Props> = ({ isLoggedIn }) => {
   return isLoggedIn ? <Outlet /> : <Navigate to="/register" />;
};

export default ProtectedRoutes;
