import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

const layoutStyle = {
    display: 'grid',
    gridTemplateAreas: `"header header"
           "sidebar chat"`,
    height: '100vh',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr 4fr'
}

export default function Main() {
  return (
      <div className='overflow-hidden' style={layoutStyle}>
          <Header></Header>
          <Sidebar></Sidebar>
          <Chat></Chat>
      </div>
  )
}
