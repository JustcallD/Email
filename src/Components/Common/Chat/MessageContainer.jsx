// import PropTypes from "prop-types";

// const MessageContainer = ({ messages }) => {
//   return (
//     <div className="message-container">
//       {messages.map((message, i) => (
//         <div
//           key={i}
//           className={`message ${
//             message.sender === "from" ? "sent" : "received"
//           }`}
//         >
//           {message.text}
//         </div>
//       ))}
//     </div>
//   );
// };
// MessageContainer.propTypes = {
//   messages: PropTypes.object.isRequired,
// };
// export default MessageContainer;

import PropTypes from "prop-types";
import styles from "./MessageContainer.module.css";

const MessageContainer = ({ messages }) => {
  return (
    <div className={styles.messageContainer}>
      {messages.map((message, i) => (
        <div
          key={i}
          className={`${styles.message} ${
            message.sender === "from" ? styles.sent : styles.received
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(["from", "to"]).isRequired,
    })
  ).isRequired,
};

export default MessageContainer;
