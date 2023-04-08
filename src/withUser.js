import React, { useState, useEffect } from "react";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8081";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      console.log("loaded");
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
