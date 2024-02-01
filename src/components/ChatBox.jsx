import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Colorfullloader from './Colorfullloader';
import Chatbroilerplate from './Chatbroilerplate';

function ChatBox({ showMain }) {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatContent, setChatContent] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const newChatContent = [
        ...chatContent,
        {
          user: <FaRegUserCircle />,
          question: 'what is the file about ?',
          answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt placeat eos dicta impedit odio iste. Repellat sapiente autem numquam magni.',
        },
        {
          user: <FaRegUserCircle />,
          question: 'what are the user skills ?',
          answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt placeat eos dicta impedit odio iste. Repellat sapiente autem numquam magni.',
        },
      ];

      setChatContent(newChatContent);
      setLoading(false);
      setInputValue('');
    }, 2000);
  };

  const handleDeleteChat = () => {
    toast.warn('Deleting chat...', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      onClose: () => {
        setChatContent([]);
      },
    });
  };

  return (
    <div className="chat_container">
      <div className="delete-icon-container" onClick={handleDeleteChat}>
        <div className="delet_box">
          <MdDelete className="d_icon" />
        </div>
      </div>
      {showMain ? (
        <Chatbroilerplate />
      ) : (
        <>
          <div className="sample_chat_box">
            {chatContent.map((chat, index) => (
              <React.Fragment key={index}>
                <div className="chat_1_box_Q">
                  {chat.user}
                  <p className="chat_1_que">{chat.question}</p>
                </div>
                <div className="ans_1_box">
                  <div className="chat_1_ans">
                    <p>{chat.answer}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {loading && <Colorfullloader />}
          </div>
          <div className='input_section'>
          <form onSubmit={handleFormSubmit}>
            <div className="input_box">
              <input
                required
                type="text"
                className="msg_input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="send_btn">
                {loading ? <div className="loader"></div> : <IoSend />}
              </button>
            </div>
          </form>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default ChatBox;
