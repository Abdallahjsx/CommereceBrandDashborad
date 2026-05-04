"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ChatSidebar from "./ChatSidebar";
import ChatContent from "./ChatContent";
import ChatMsgSent from "./ChatMsgSent";
import { useContext } from "react";
import { ChatContext } from "@/context/ChatContext";

const ChatApp = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { selectedChat, sendMessage } = useContext(ChatContext);

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Left part */}
      {/* ------------------------------------------- */}

      <ChatSidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      {/* ------------------------------------------- */}
      {/* Right part */}
      {/* ------------------------------------------- */}

      <Box flexGrow={1}>
        <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
        {selectedChat &&
          <>
            <Divider />
            <ChatMsgSent />
          </>
        }
      </Box>
    </>
  );
};

export default ChatApp;
