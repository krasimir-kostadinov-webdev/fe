import { RouteObject } from "react-router-dom";
import {} from "react-router-dom";

interface Props {
   isLoggedIn?: boolean;
   children?: RouteObject;
}

const ProtectedRoute: React.FC<Props> = ({ isLoggedIn, children }) => {
   return null;
};

export default ProtectedRoute;
