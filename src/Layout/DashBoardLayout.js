import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Header from "../Page/Shared/Header/Header";

const DashBoardLayout = () => {

  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard'>My Appointments</Link>
            </li>
            {
              isAdmin &&
              <li>
                <Link to='/dashboard/users'>Users</Link>
                <Link to='/dashboard/add-a-doctor'>Add Doctor</Link>
                <Link to='/dashboard/manage-doctors'>Manage Doctor</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
