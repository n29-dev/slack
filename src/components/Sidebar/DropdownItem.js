import React from "react";
import { useNavigate } from "react-router-dom";

export default function DropdownItem({ icon, text, id }) {
  const navigate = useNavigate();

  return (
    <li
      className="sidebar-option text-[16px] hover:bg-transparent hover:text-white"
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      {icon} {text}
    </li>
  );
}
