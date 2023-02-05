import React, { useState, useEffect } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const { user, setuser } = useState(null);
  useEffect(() => {
    async () => {
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setuser(currentUser);
    };
  }, []);

  return (
    //for each child inside the "children"
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          //pass the user variavle to the child prop
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
