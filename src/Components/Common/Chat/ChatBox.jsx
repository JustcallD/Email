import PropTypes from "prop-types";
import Profile from "../../../Assets/img/Profile.jpg";
import styles from "./ChatBox.module.css"; // Import CSS module

const ChatBox = ({ messages }) => {
  return (
    <div className={styles.chatBoxContainer}>
      <div>
        <img src={Profile} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.userInfo}>
        <h2>{messages.sender}</h2>
        <h4>{messages.text}</h4>
      </div>
      <div>{messages.time}</div>
    </div>
  );
};
ChatBox.propTypes = {
  messages: PropTypes.object.isRequired,
};

export default ChatBox;
