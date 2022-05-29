import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Greetings from "./Greetings/Greetings";
import { Routes, Route } from "react-router-dom";

const layoutStyle = {
  display: "grid",
  gridTemplateAreas: `"header header"
           "sidebar chat"`,
  height: "100vh",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "1fr 4fr",
};

export default function Main() {
  return (
    <div className="overflow-hidden" style={layoutStyle}>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Greetings />} />
        <Route path=":id" element={<Chat />} />
      </Routes>
    </div>
  );
}
