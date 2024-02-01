import React from 'react'
import { CiFileOn } from "react-icons/ci";
import { GoStack } from "react-icons/go";
// import { GoCheckCircle } from "react-icons/go";

function Filedetails({ onChatStart }) {
  return (
    <div className='file_meta_box'>
      <div className='file_meta_1'>
        <span><CiFileOn /></span>
        <p className='file_size'>243 kb</p>
      </div>
      <div className='file_meta_2'>
        <span><GoStack /></span>
        <p className='file_pages'>05 pages</p>
      </div>
      {/* <div className='start_chat_btn_box'>
        <span onClick={onChatStart}>Start Chat</span>
      </div> */}
    </div>
  )
}

export default Filedetails;
