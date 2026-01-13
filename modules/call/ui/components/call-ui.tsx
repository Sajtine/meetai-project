"use client";

import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { CallLobby } from "./call-lobby";
import { CallActive } from "./call-active";
import { CallEnded } from "./call-ended";

interface Props {
  meetingName: string;
}

export const CallUI = ({ meetingName }: Props) => {
  const call = useCall();
  const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");

  if (!call) {
    // If useCall() is undefined, render nothing (or a loader)
    return <p>Loading call...</p>;
  }

  const handleJoin = async () => {
    await call.join(); 
    setShow("call");
  };

  const handleLeave = async () => {
    await call.endCall();
    setShow("ended");
  };

  return (
    <StreamTheme className="h-screen">
      {show === "lobby" && <CallLobby onJoin={handleJoin} />}
      {show === "call" && (
        <CallActive onLeave={handleLeave} meetingName={meetingName} />
      )}
      {show === "ended" && <CallEnded />}
    </StreamTheme>
  );
};
