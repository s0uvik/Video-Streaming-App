import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { chatAction } from "../utils/store/chatSlice";
import { randomName, randomText } from "../utils/helper";

const LiveChat = () => {
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
    console.log("first");
    const T = setInterval(() => {
      console.log("chat api call...")
      fetchChat();
    }, 1500);


    return () => clearInterval(T)
  }, []);

  const handleMessageEnd = (e) => {
    e.preventDefault();
    dispatch(
      chatAction.addChats({ name: "Souvik", message: message })
    );
    setMessage("")
  };

  return (
    <div className=" border w-[400px] h-[600px] bg-slate-200 rounded-md flex flex-col justify-between gap-2">
      <div className="overflow-y-scroll">
        {" "}
        <h1 className=" ml-3 mt-2 font-semibold text-xl ">Live Chat</h1>
        <div className=" ml-2 p-2 justify-self-start flex flex-col-reverse">
          {chat.map((item, index) => (
            <Chat key={index} data={item} />
          ))}
        </div>
      </div>
      <form action="" onSubmit={handleMessageEnd}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="type your message"
          type="text"
          className=" p-1 w-full focus:border-none focus:outline-none pl-3 border-slate-950"
        />
      </form>
    </div>
  );
};

export default LiveChat;
