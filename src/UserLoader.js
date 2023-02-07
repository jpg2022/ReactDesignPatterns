import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userID, children }) => {
  const { user, setUser } = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userID}`);
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, [userID]);

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
