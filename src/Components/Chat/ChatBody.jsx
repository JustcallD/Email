import MessageContainer from "../Common/Chat/MessageContainer";
import styles from "./ChatBody.module.css";

const ChatBody = () => {
  // Dummy data for messages
  const messages = [
    { text: "Hello!", sender: "from" },
    { text: "Hi there!", sender: "to" },
    { text: "How are you?", sender: "from" },
    { text: "I'm good, thank you!", sender: "to" },
    { text: "What are you doing today?", sender: "from" },
    { text: "Just working on some projects.", sender: "to" },
    { text: "That sounds interesting!", sender: "from" },
    { text: "Yes, it's quite fun!", sender: "to" },
    { text: "Do you have any plans for the weekend?", sender: "from" },
    { text: "Not yet, maybe I'll go hiking.", sender: "to" },
    { text: "That sounds like a great idea!", sender: "from" },
    { text: "Yes, I love spending time outdoors.", sender: "to" },
    { text: "Have you seen the latest movie?", sender: "from" },
    { text: "No, not yet. Is it good?", sender: "to" },
    { text: "Yes, it's really entertaining!", sender: "from" },
    { text: "I'll have to check it out!", sender: "to" },
    { text: "What's your favorite hobby?", sender: "from" },
    { text: "I enjoy playing guitar.", sender: "to" },
    { text: "That's cool! I play piano.", sender: "from" },
    { text: "We should jam sometime!", sender: "to" },
    { text: "Definitely, that would be fun!", sender: "from" },
    { text: "What's the weather like where you are?", sender: "to" },
    { text: "It's sunny and warm today.", sender: "from" },
    { text: "Lucky you, it's raining here.", sender: "to" },
    { text: "Rain can be nice too!", sender: "from" },
    { text: "Yes, it's cozy staying indoors.", sender: "to" },
    { text: "Do you have any pets?", sender: "from" },
    { text: "Yes, I have a cat named Luna.", sender: "to" },
    { text: "Cats are adorable!", sender: "from" },
    { text: "Indeed, they're great companions.", sender: "to" },
  ];

  return (
    <div className={styles.chatBodyContainer}>
      <div className={styles.chatBody}>
        <MessageContainer messages={messages} />
      </div>
    </div>
  );
};

export default ChatBody;
