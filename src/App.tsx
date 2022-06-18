import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Layout/Navigation/Navigation";
import AccountPage from "./components/pages/Account/AccountPage";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";

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
                  <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/account" element={<AccountPage />} />
               </Routes>
            </div>
         </div>
      </>
   );
};

export default App;
