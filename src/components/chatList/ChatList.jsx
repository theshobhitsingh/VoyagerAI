import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/chats");
      const data = await response.json();
      setChatHistory(data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  useEffect(() => {
    fetchChatHistory();

    const intervalId = setInterval(fetchChatHistory, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="chatList">
      <span className="dash">Dashboard</span>
      <Link className="ll" to="/dashboard">Create a New Chat</Link>
      <Link className="ll" to="/">Explore VoyagerAI</Link>
      <Link className="ll" to="/">Contact Us</Link>
      <hr />
      <span className="title">Recent Chats</span>
      {/* <div className="list">
        {chatHistory.length === 0 ? (
          <p className="noChatsMessage">No recent chats available.</p>
        ) : (
          chatHistory.map((chat) => (
            <Link to={`/dashboard/chats/${chat._id}`} key={chat._id} className="chatCard">
              {chat.question}
            </Link>
          ))
        )}
      </div> */}
      <div className="list">
        {chatHistory.length === 0 ? (
          <p className="noChatsMessage">No recent chats available.</p>
        ) : (
          chatHistory.slice().reverse().map((chat) => (
            <Link to={`/dashboard/chats/${chat._id}`} key={chat._id} className="chatCard">
              {chat.question}
            </Link>
          ))
        )}
      </div>

      {/* <hr /> */}
      <div className="upgrade">
        <img src="/logo.png" alt="VoyagerAI Logo" />
        <div className="texts">
          <span>Upgrade to VoyagerAI+</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
