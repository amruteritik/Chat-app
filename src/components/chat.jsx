import React, { useContext } from "react";
import { ChatContext } from "../context/chatcontext";
import Messages from "./messages";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Input from "./input";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={data.user?.photoURL} />
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <CameraAltIcon />
          <PersonAddIcon />
          <MoreVertIcon />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;