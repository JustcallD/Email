import Style from "./Sidebar.module.css";
import Logo from "../../Assets/img/Logo.png";
import Profile from "../../Assets/img/Profile.jpg";
import { NavLink } from "react-router-dom";
import { BsChatSquareText } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { SlUserFollow } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={Style.menu}>
        <ul className={Style.menuList}>
          <li className={Style.menuItem}>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive
                  ? `${Style.menuLink} ${Style.active}`
                  : `${Style.menuLink}`
              }
            >
              <BsChatSquareText className={Style.menuIcon} />
            </NavLink>
          </li>
          <li className={Style.menuItem}>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? `${Style.menuLink} ${Style.active}`
                  : `${Style.menuLink}`
              }
            >
              <FiUsers className={Style.menuIcon} />
            </NavLink>
          </li>
          <li className={Style.menuItem}>
            <NavLink
              to="/calls"
              className={({ isActive }) =>
                isActive
                  ? `${Style.menuLink} ${Style.active}`
                  : `${Style.menuLink}`
              }
            >
              <IoCallOutline className={Style.menuIcon} />
            </NavLink>
          </li>
          <li className={Style.menuItem}>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive
                  ? `${Style.menuLink} ${Style.active}`
                  : `${Style.menuLink}`
              }
            >
              <SlUserFollow className={Style.menuIcon} />
            </NavLink>
          </li>
          <li className={Style.menuItem}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? `${Style.menuLink} ${Style.active}`
                  : `${Style.menuLink}`
              }
            >
              <IoSettingsOutline className={Style.menuIcon} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={Style.profilePic}>
        <img src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
