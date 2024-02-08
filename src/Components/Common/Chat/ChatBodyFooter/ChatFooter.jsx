import { FiSend } from "react-icons/fi";
import { TiAttachment } from "react-icons/ti";
import InputBox from "../../Input/InputBox";
import styles from "./ChatFooter.module.css";

const ChatFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.inputContainer}>
        {/* Apply input container style */}
        <span className={styles.attachmentIcon}>
          <TiAttachment />
        </span>
        <InputBox
          className={styles.inputBox}
          type="text"
          placeholder="Type your message"
        />
      </div>
      <div className={styles.sendIcon}>
        <FiSend />
      </div>
    </div>
  );
};

export default ChatFooter;
