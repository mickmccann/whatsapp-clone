import React from 'react';  
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge'

function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>

        <div className='sidebar__headerRight'>
          <DonutLargeIcon />
        </div>
      </div>
    </div>
  )
}

export default sidebar