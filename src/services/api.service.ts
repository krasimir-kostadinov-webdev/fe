import axios from "axios";
class BackendAPI {
   private API_URL = "http://localhost:3333/auth";

   register = async (email: string, password: string): Promise<any> => {
      return await axios.post(`${this.API_URL}/signup`, {
         email,
         password,
      });
   };
}

const backendAPI = new BackendAPI();
export default backendAPI;
