// // import PropTypes from "prop-types";
// import { CiMenuKebab } from "react-icons/ci";
// import { IoCallOutline, IoVideocam } from "react-icons/io5";
// import Profile from "../../../Assets/img/Profile.jpg";

// const Header = () => {
//   return (
//     <div>
//       <div>
//         <div>
//           <img src={Profile} alt="" />
//         </div>
//         <div>
//           <h3>Name</h3>
//           <h5>online</h5>
//         </div>
//       </div>
//       <div>
//         <div>
//           <IoVideocam />
//         </div>
//         <div>
//           <IoCallOutline />
//         </div>
//         <div>
//           <CiMenuKebab />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Header.propTypes = {};

// export default Header;

import { IoCallOutline, IoVideocam } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import Profile from "../../../Assets/img/Profile.jpg";
import styles from "./Header.module.css"; // Import CSS module

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profileInfo}>
        <div className={styles.profileImage}>
          <img src={Profile} alt="Profile" />
        </div>
        <div className={styles.profileDetails}>
          <h3>Name</h3>
          <h5>Online</h5>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.actionItem}>
          <IoVideocam />
        </div>
        <div className={styles.actionItem}>
          <IoCallOutline />
        </div>
        <div className={styles.actionItem}>
          <CiMenuKebab />
        </div>
      </div>
    </div>
  );
};

export default Header;
