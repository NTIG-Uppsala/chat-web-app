"use client"
import { DefaultEventsMap } from "@socket.io/component-emitter";
import Message from "./messages";
import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import { Socket, io } from "socket.io-client";

function MessageInputAndButton(props: { disabled: boolean, changeHandler: (event: ChangeEvent<HTMLInputElement>)=>void }) {
  return (
    <>
      <input type="text" id="messageInput" name="message" className="bg-slate-300 m-2" placeholder="New message" onChange={props.changeHandler}/>
        <button className="bg-slate-200 hover:bg-slate-300 px-2" disabled={props.disabled}>
          Send
        </button>
    </>
  );
}

interface messageType {
  username: string;
  message: string;
}

export default function MessageSystem() {
  const [user, setUser] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<messageType[]>([]);
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    socketRef.current = io("http://localhost:3001");
    socketRef.current.on("receive_msg", (message: messageType) => {
      setMessages((previous) => [...previous, message]);
    });
    return (() => {
      socketRef.current?.removeListener("receive_msg");
   })
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message: messageType = {
      username: user,
      message: currentMessage
    }
    socketRef.current?.emit("send_message", message);

    const messageInput = document.getElementById("messageInput") as HTMLInputElement;
    if (messageInput) {
      messageInput.value = "";
      setCurrentMessage("");
    }
  }

  return (
    <div>
      <div className="flex justify-center my-8">
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" className="bg-slate-300 m-2" placeholder="Choose a username" onChange={(e) => setUser(e.target.value)}/>
          <br />
          <MessageInputAndButton disabled={user === "" || currentMessage === ""} changeHandler={(e) => setCurrentMessage(e.target.value)}></MessageInputAndButton>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        {messages.map((message, index) => (
          <Message key={index} name={message.username} message={message.message}></Message>
        ))}
      </div>
    </div>
  );
}