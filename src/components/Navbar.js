import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";

const NavbarComponent = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src={logo} className="w-60" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {!isLoggedIn && (
          <>
            <Navbar.Link className="text-lg" href="/signup">
              Sign up
            </Navbar.Link>
            <Navbar.Link className="text-lg" href="/login">
              Login
            </Navbar.Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Navbar.Link className="text-lg" href="/">
              Home
            </Navbar.Link>
            <Navbar.Link className="text-lg" href="/foods">
              Food
            </Navbar.Link>
            <Navbar.Link
              className="text-lg hover:cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </Navbar.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
