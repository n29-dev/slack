import React from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Chat from './Chat';

const layoutStyle = {
    display: 'grid',
    gridTemplateAreas: `"header header"
           "sidebar chat"`,
    height: '100vh',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr 4fr'
}

export default function Home() {
  return (
      <div className='overflow-hidden' style={layoutStyle}>
          <Header></Header>
          <Sidebar></Sidebar>
          <Chat></Chat>
      </div>
  )
}
