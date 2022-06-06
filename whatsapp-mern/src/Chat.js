import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './Chat.css';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar />
          <div className='chat__headerInfo'>
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>
          <div className='chat__headerRight'>
            <IconButton>
              <SearchOutlined />
            </IconButton>

            <IconButton>
              <AttachFile />
            </IconButton>

            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className='chat__body'>
          <p className='chat__message'>
            <span className='chat__name'>Michael</span>
            Hello world!
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p>

          <p className='chat__message chat__receiver'>
            <span className='chat__name'>Michael</span>
            Hello world!
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p>
        </div>
    </div>
  )
}

export default Chat