import { useState } from "react";

enum STATUS {
   HOVERED = "hovered",
   NORMAL = "normal",
}

type LinkProps = {
   page: string;
   children: JSX.Element | string;
};

const Link: React.FC<LinkProps> = ({ page, children }) => {
   const [status, setStatus] = useState(STATUS.NORMAL);
   const onMouseEnter = () => {
      setStatus(STATUS.HOVERED);
   };
   const onMouseLeave = () => {
      setStatus(STATUS.NORMAL);
   };

   return (
      <a
         href={page || "#"}
         className={status}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         {children}
      </a>
   );
};

export default Link;
