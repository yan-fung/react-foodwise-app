import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-teal-300">
          FOODWISE
        </h1>
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
              Foods
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
