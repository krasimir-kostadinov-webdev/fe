import { SyntheticEvent, useState } from "react";
import backendAPI from "../../../services/api.service";

const Register: React.FC = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
         await backendAPI.register(email, password);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <h2>Register form</h2>
         <form data-cy="form" onSubmit={handleSubmit}>
            <input
               type="email"
               value={email}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
               }}
               placeholder="email"
            />
            <input
               type="password"
               value={password}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
               }}
               placeholder="password"
            />
            <button type="submit">Register</button>
         </form>
      </>
   );
};

export default Register;
