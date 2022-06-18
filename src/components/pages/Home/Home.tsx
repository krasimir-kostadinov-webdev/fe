import React from "react";

type Props = {
   isLoggedIn: boolean;
};

const Home: React.FC<Props> = ({ isLoggedIn }) => {
   return (
      <div>
         <h2>Home page</h2>
         {isLoggedIn && <h3>I'm currently loggedIn</h3>}
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laudantium culpa autem. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum mollitia alias corrupti totam voluptas?
            Non neque, commodi id autem suscipit, dolorum amet voluptatibus ipsa
            fugit vel fuga, rerum impedit adipisci. Laudantium assumenda sint
            quod quis voluptates porro explicabo eaque doloremque dolore ea
            fuga, eius labore eligendi perspiciatis. Fuga, doloremque!
         </p>
      </div>
   );
};

export default Home;
