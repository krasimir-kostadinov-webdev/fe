import { Link } from "react-router-dom";

type Props = {};

const Navigation = (props: Props) => {
   return (
      <nav>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/register">Register</Link>
            </li>
            <li>
               <Link to="/account">Account</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
