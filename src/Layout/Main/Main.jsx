import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegistrationPage = location.pathname === "/signUp";

  if (isLoginPage || isRegistrationPage) {
    return (
      <>
        <Outlet></Outlet>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
