// import { LuCircleDashed } from "react-icons/lu";
// import InputBox from "../Common/Input/InputBox";
// import ChatBox from "../Common/Chat/ChatBox";
// import styles from "./ChatList.module.css"; // Import CSS module
// // import ScrollBar from "../Common/ScrollBar/ScrollBar";

// const ChatList = () => {
//   const messages = [
//     {
//       sender: "User1",
//       text: "Hello there!",
//       time: "10:00 AM",
//     },
//     {
//       sender: "User2",
//       text: "Hi, how are you?",
//       time: "10:05 AM",
//     },
//     {
//       sender: "User3",
//       text: "I'm doing well, thanks!",
//       time: "10:10 AM",
//     },
//     {
//       sender: "User1",
//       text: "Nice to hear that!",
//       time: "10:15 AM",
//     },
//     {
//       sender: "User2",
//       text: "What are you up to?",
//       time: "10:20 AM",
//     },
//     {
//       sender: "User3",
//       text: "Just working on some projects.",
//       time: "10:25 AM",
//     },
//   ];

//   return (
//     <div className={styles.chatListContainer}>
//       <div className={styles.titleContainer}>
//         <h2>Chats</h2>
//         <span>
//           <LuCircleDashed />
//         </span>
//       </div>
//       <div className={styles.searchInputContainer}>
//         <InputBox className={styles.searchInput} placeholder="Search" />
//       </div>
//       <div className={styles.chatBoxContainer}>
//         <h3>Chats</h3>
//         <div className={styles.chatListBox}>
//           <div className={styles.chatList}>
//             {messages.map((data, i) => (
//               <ChatBox key={i} messages={data} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatList;

import { LuCircleDashed } from "react-icons/lu";
import InputBox from "../Common/Input/InputBox";
import ChatBox from "../Common/Chat/ChatBox";
import styles from "./ChatList.module.css";

const ChatList = () => {
  const UserList = [
    {
      sender: "User1",
      text: "Hello there!",
      time: "10:00 AM",
    },
    {
      sender: "User2",
      text: "Hi, how are you?",
      time: "10:05 AM",
    },
    {
      sender: "User3",
      text: "I'm doing well, thanks!",
      time: "10:10 AM",
    },
    {
      sender: "User1",
      text: "Nice to hear that!",
      time: "10:15 AM",
    },
    {
      sender: "User2",
      text: "What are you up to?",
      time: "10:20 AM",
    },
    {
      sender: "User3",
      text: "Just working on some projects.",
      time: "10:25 AM",
    },
    {
      sender: "User3",
      text: "Just working on some projects.",
      time: "10:25 AM",
    },
  ];

  return (
    <div className={styles.chatListContainer}>
      <div className={styles.titleContainer}>
        <h2>Chats</h2>
        <span>
          <LuCircleDashed />
        </span>
      </div>
      <div className={styles.searchInputContainer}>
        <InputBox className={styles.searchInput} placeholder="Search" />
      </div>
      <div className={styles.chatBoxContainer}>
        <h3>Chats</h3>
        <div className={styles.list}>
          <div className={styles.ChatList}>
            {UserList.map((data, i) => (
              <ChatBox key={i} messages={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
