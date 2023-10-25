import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import SideDrawer from "../components/SideDrawer";
import { Box } from "@chakra-ui/react";

const ChatPage = () => {
  const { user } = ChatState();
  // console.log(user);
  const [fetchAgain,setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        h="90%"
        p="10px"
      >
        {user && (
          <MyChats fetchAgain={fetchAgain} />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
