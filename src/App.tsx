import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Layout/Navigation/Navigation";
import AccountPage from "./components/pages/Account/AccountPage";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

type Props = {
   isLoggedIn: boolean;
};

const App: React.FC<Props> = ({ isLoggedIn }) => {
   return (
      <>
         <div>
            <Navigation />
            <div className="wrapper">
               <Routes>
                  <Route element={<ProtectedRoutes isLoggedIn={true} />}>
                     {/* CAN MAP ALL PROTECTED ROUTES BELOW */}
                     <Route path="/" element={<Home />} />
                     <Route path="/account" element={<AccountPage />} />
                  </Route>
                  <Route path="/register" element={<Register />} />
               </Routes>
            </div>
         </div>
      </>
   );
};

export default App;
