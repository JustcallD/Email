import ChatList from "../../Components/Chat/ChatList";
import ChatFooter from "../../Components/Common/Chat/ChatBodyFooter/ChatFooter";
import InputBox from "../../Components/Common/Input/InputBox";

const Home = () => {
  return (
    <div>
      <InputBox />
      <ChatList />
      <ChatFooter />
    </div>
  );
};

export default Home;
