import { useState, useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";
import "./dashboardPage.css";

const googleAI = new GoogleGenerativeAI("AIzaSyCXL98QXpc0ltzWQekEN108UyUAd0eZr1g");

const DashboardPage = () => {
  const queryClient = useQueryClient();
  const [answer, setAnswer] = useState("");
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const answerRef = useRef(null);
  const navigate = useNavigate();

  const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
  };

  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro",
    geminiConfig,
  });

  const generate = async (promptText) => {
    try {
      const result = await geminiModel.generateContent(promptText);
      const response = result.response.text();
      setAnswer(response);

      // Prepare chat data
      const newChat = { question: promptText, answer: response };

      // Save to backend
      try {
        await fetch("https://voyagerai-backend.onrender.com/api/chats", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newChat),
        });

        // Update chat history with new chat
        setChatHistory((prev) => [...prev, newChat]);
      } catch (error) {
        console.error("Error saving chat:", error);
      }
    } catch (error) {
      console.log("Error generating content:", error);
      setAnswer("Error generating content.");
    }
  };

  useEffect(() => {
    let index = 0;
    if (answer) {
      const typingInterval = setInterval(() => {
        setDisplayedAnswer((prev) => prev + answer[index]);
        index++;
        if (index >= answer.length) {
          clearInterval(typingInterval);
        }
      }, 1);
      return () => clearInterval(typingInterval);
    }
  }, [answer]);

  useEffect(() => {
    if (answerRef.current) {
      answerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    e.target.text.value = "";
    if (!text) return;
    setDisplayedAnswer("");
    await generate(text);
  };

  const goToChat = (id) => {
    navigate(`/dashboard/chats/${id}`);
  };

  return (
    <div className="dashboardPage">
      <div className="chatContainer">
        <div className="header">
          <img src="/logo.png" alt="VoyagerAI Logo" />
          <h1>VoyagerAI</h1>
        </div>
        <div className="chatHistory">
          {chatHistory && chatHistory.length > 0 ? (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className="chatMessage"
                onClick={() => goToChat(chat._id)} // Navigate to the individual chat page
              >
                <div className="question">
                  <strong>Question:</strong> {chat.question}
                </div>
                <div className="answer">
                  <strong>Answer:</strong> {chat.answer}
                </div>
              </div>
            ))
          ) : (
            <h1 className="noChatsMessage">No chats available at the moment!</h1>
          )}
        </div>

        {/* <div className="chatHistory">
          {chatHistory == null ? "no hinhdouhn" :
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className="chatMessage"
              onClick={() => goToChat(chat._id)} // Navigate to the individual chat page
            >
              <div className="question">
                <strong>Question:</strong> {chat.question}
              </div>
              <div className="answer">
                <strong>Answer:</strong> {chat.answer}
              </div>
            </div>
          ))
          }  */}
        {/* {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="chatMessage"
              onClick={() => goToChat(chat._id)} // Navigate to the individual chat page
            >
              <div className="question">
                <strong>Question:</strong> {chat.question}
              </div>
              <div className="answer">
                <strong>Answer:</strong> {chat.answer}
              </div>
            </div>
          ))} */}
        {/* </div> */}
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Ask me anything..." />
            <button type="submit">
              <img src="/arrow.png" alt="Submit" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
