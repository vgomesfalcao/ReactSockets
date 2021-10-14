import { useState } from "react";
const Chat = () => {
  const [message, updateMessage] = useState("");
  const [messages, updateMessages] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()){
      updateMessage('')
    }
  };
  const handleInputChange = (event) => {
    updateMessage(event.target.value);
  };
  return (
    <main className="container">
      <ul className="list">
        <li className="list__item list__item--mine">
          <span className="message message--mine">Ola</span>
        </li>
      </ul>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Type a new message here"
          className="form__field"
          onChange={handleInputChange}
          value={message}
        />
      </form>
    </main>
  );
};

export default Chat;
