import Header from "../../Components/Common/Chat/Header";
import ChatBody from "../../Components/Chat/ChatBody";
import styles from "./Chat.module.css";
import ChatList from "../../Components/Chat/ChatList";
import Footer from "../../Components/Common/Chat/ChatBodyFooter/ChatFooter";

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatColumnLeft}>
        <ChatList />
      </div>
      <div className={styles.chatColumnRight}>
        <Header />
        <ChatBody />
        <Footer />
      </div>
    </div>
  );
};

export default Chat;
