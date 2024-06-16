import { useEffect, useState, useRef } from "react";
import './Messages.css';
import axios from 'axios';

export default function Messages({ text }) {
  const [messages, setMessages] = useState([]);
  const scrollableContainerRef = useRef(null);


  useEffect(() => {
    async function fetchMessages() {
      try {
        if (text) {
          const currentDate = new Date();

          const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          });
          
          const formattedTime = currentDate.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // Use 24-hour format
          });
          
          const formattedDateTime = `${formattedDate} ${formattedTime}`;
          const newMessage = { message: text, createdAt: formattedDateTime };
          await axios.post("https://ping-p0e1.onrender.com", newMessage);
        }
        
        const response = await axios.get("https://ping-p0e1.onrender.com");
        setMessages(response.data);
        
        // Scroll to bottom after messages are updated
        if (scrollableContainerRef.current) {
          scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight;
        }
      } catch (error) {
        console.error("Error fetching or posting messages:", error);
      }
    }

    fetchMessages();
  }, [text]);

  return (
    <div className="parent">
      <div className="scrollable-container" ref={scrollableContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className="message-container">
            <div>{message.message}</div>
            <div>{message.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
