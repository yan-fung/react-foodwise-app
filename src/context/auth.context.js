import { useState, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProviderWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const API_URL = "http://localhost:4000";

  const storeItems = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("timestamp", Date.now());
  };

  const hasTokenExpired = () => {
    const token = localStorage.getItem("token");
    const timestamp = localStorage.getItem("timestamp");

    if (!token || !timestamp) {
      return false;
    }
    const timePassed = Date.now - Number(timestamp);
    return timePassed > 3600000;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("timestamp");

    window.location.reload();
  };

  const authenticateUser = () => {
    const token = localStorage.getItem("token");

    if (!token || hasTokenExpired()) {
      setIsLoggedIn(false);
      setLoading(false);
      setUser(null);
    } else {
      axios
        .get(`${API_URL}/verify`, { headers: { token } })
        .then((response) => {
          setIsLoggedIn(true);
          setUser(response.data.user);
          setLoading(false);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
          setLoading(false);
          setUser(null);
        });
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ storeItems, isLoading, isLoggedIn, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
