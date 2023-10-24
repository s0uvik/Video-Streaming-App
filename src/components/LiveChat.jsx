import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { chatAction } from "../utils/store/chatSlice";
import { randomName, randomText } from "../utils/helper";

const LiveChat = () => {
  const [toggleChat, setToggleChat] = useState(false);
  const chat = useSelector((state) => state.chat.chat);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const fetchChat = () => {
    dispatch(
      chatAction.addChats({ name: randomName(), message: randomText(10) })
    );
  };

  //code for lice chat
  useEffect(() => {
    // console.log("first");
    const T = setInterval(() => {
      // console.log("chat api call...")
      fetchChat();
    }, 1500);

    return () => clearInterval(T);
  }, []);

  const handleMessageEnd = (e) => {
    e.preventDefault();
    dispatch(chatAction.addChats({ name: "Souvik", message: message }));
    setMessage("");
  };

  return (
    <div className=" mb-4 mr-4 w-[400px] max-h-[600px] bg-slate-200 rounded-md flex flex-col justify-between gap-2">
      <h1
        onClick={() => setToggleChat(!toggleChat)}
        className=" cursor-pointer ml-3 mt-2 font-semibold text-xl pb-2 "
      >
        Live Chat {toggleChat ?"⬆️": "⬇️"}
      </h1>
      {toggleChat && (
        <div className="overflow-y-scroll">
          <div className=" ml-2 p-2 justify-self-start flex flex-col-reverse">
            {chat.map((item, index) => (
              <Chat key={index} data={item} />
            ))}
          </div>
        </div>
      )}
      {toggleChat && (
        <form action="" className="border" onSubmit={handleMessageEnd}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type your message"
            type="text"
            className=" p-1 w-full h-10 focus:border-none focus:outline-none pl-3 border-slate-950"
          />
        </form>
      )}
    </div>
  );
};

export default LiveChat;
