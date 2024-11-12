import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./chatDetailPage.css";

const ChatDetailPage = () => {
  const { id } = useParams(); // Get the chat ID from the URL
  const navigate = useNavigate();
  const [chatDetails, setChatDetails] = useState(null);

  useEffect(() => {
    // Fetch the chat details by ID from your backend
    const fetchChatDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/chats/${id}`);
        const data = await response.json();
        setChatDetails(data);
      } catch (error) {
        console.error("Error fetching chat details:", error);
      }
    };
    fetchChatDetails();
  }, [id]);

  const goBack = () => {
    navigate("/dashboard"); // Navigate back to the dashboard
  };

  if (!chatDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chatDetailPage">
      <div className="header">
        <button onClick={goBack} className="backButton">Back to Dashboard</button>
        <h1>Chat Details</h1>
      </div>
      <div className="chatContent">
        <div className="chatMessage">
          <div className="question">
            <strong>Question:</strong> {chatDetails.question}
          </div>
          <div className="answer">
            <strong>Answer:</strong> {chatDetails.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetailPage;
