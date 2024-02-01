import React, { useState, useEffect } from 'react';
import { MdChatBubble } from "react-icons/md";
import Filedetails from './Filedetails';
import { FaArrowRight } from "react-icons/fa";

function DocumentsList({ fileData, toggleMain }) {
  console.log("doc list", fileData);
  const [showFiles, setShowFiles] = useState([]);
  const [loadingDots, setLoadingDots] = useState(0);
  const [showFilesDetails, setShowFilesDetails] = useState(null);
  const [chatStarted, setChatStarted] = useState(null);
  const [activeFile, setActiveFile] = useState(null);

  const handleGetFileInfo = (fileId) => {
    setShowFilesDetails(fileId);
    setChatStarted(fileId);
    setActiveFile(fileId);

  };

  useEffect(() => {
    // Set the entire fileData array to showFiles state when fileData changes
    setShowFiles(fileData);
  }, [fileData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prevDots) => (prevDots + 1) % 3);
    }, 500); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = () => {
    toggleMain();
  };


  return (
    <div>
      <h1 className='doc_heading'>My Files</h1>
      <div>
        {fileData.length > 0 ? (
          showFiles.map((file) => (
            <div key={file.id} className='file_div'>
              <div className={`file_container ${activeFile === file.id ? 'active' : ''}`}>
                <div className='file_con_1'>
                  <p className='file_name'>{file.name}</p>
                  {showFilesDetails === file.id && <Filedetails />}
                </div>
                <div>
                  {chatStarted === file.id ? (
                    <p className='chat_icon'><FaArrowRight onClick={handleArrowClick} /></p>
                  ) : (
                    <p className='chat_icon' onClick={() => handleGetFileInfo(file.id)}><MdChatBubble /></p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='loading-dots'>
            <div className={`dot ${loadingDots === 0 ? 'red' : ''}`}></div>
            <div className={`dot ${loadingDots === 1 ? 'yellow' : ''}`}></div>
            <div className={`dot ${loadingDots === 2 ? 'green' : ''}`}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DocumentsList;
