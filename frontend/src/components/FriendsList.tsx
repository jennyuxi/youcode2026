"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import FriendsMindMap from "./FriendsMindMap.tsx"



// Mock friend data
interface Friend {
  id: number;
  name: string;
  avatar: string;
  messages: { fromMe: boolean; text: string }[];
}

const friends: Friend[] = [
  { id: 1, name: "Alice", avatar: "./src/assets/alice.jpg", messages: [] },
  { id: 2, name: "Bob", avatar: "./src/assets/bob.jpg", messages: [] },
  { id: 3, name: "Charlie", avatar: "./src/assets/charlie.jpg", messages: [] },
  { id: 4, name: "Jack", avatar: "./src/assets/jack.jpg", messages: [] },
  { id: 5, name: "Mergen", avatar: "./src/assets/mergen.jpg", messages: [] },
  { id: 6, name: "Jenny", avatar: "./src/assets/jenny.jpg", messages: [] },
  { id: 7, name: "Eva", avatar: "./src/assets/eva.jpg", messages: [] },
  { id: 8, name: "Sean", avatar: "./src/assets/sean.jpg", messages: [] },
];

export default function FriendsList() {
  const [activeFriend, setActiveFriend] = useState<Friend | null>(null);
  const [messageText, setMessageText] = useState("");
  const [showMindMap, setShowMindMap] = useState(false)

  const sendMessage = () => {
    if (!activeFriend || !messageText.trim()) return;

    activeFriend.messages.push({ fromMe: true, text: messageText });
    setMessageText("");
    setActiveFriend({ ...activeFriend }); // trigger rerender
  };

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200 shadow-lg">
      {/* Permanent Friends Header */}
      <div
        className="px-4 py-3 border-b border-gray-300 text-lg font-semibold cursor-pointer hover:bg-gray-100"
        onClick={() => setShowMindMap(true)}
        >
        Friends
        </div>

      {activeFriend ? (
        // Chat view
        <Card className="flex flex-col flex-1">
          <CardHeader className="px-4 py-0 border-b border-gray-300">
            <CardTitle className="flex justify-between items-center">
              {activeFriend.name}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setActiveFriend(null)}
              >
                Close
              </Button>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col flex-1 p-0">
            <ScrollArea className="flex-1 px-4 py-2">
              <div className="flex flex-col gap-2">
                {activeFriend.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-1 rounded-md max-w-[70%] ${
                      msg.fromMe
                        ? "bg-blue-500 text-white self-end"
                        : "bg-gray-200 text-black self-start"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="px-4 py-2 border-t border-gray-300 flex gap-2">
              <Input
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        // Friends list view
        <ScrollArea className="flex-1">
          <div className="flex flex-col divide-y divide-gray-200 mt-2">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                <Link to="/friendprofile">
                <Avatar className="w-10 h-10">
                <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="rounded-full"
                />
                </Avatar>
                </Link>
                  <span>{friend.name}</span>
                </div>
                <Button size="sm" onClick={() => setActiveFriend(friend)}>
                  Chat
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
      {showMindMap && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    
    <div className="bg-white rounded-xl shadow-xl w-[80vw] max-w-4xl p-4 relative">
      
      {/* Close button */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
        onClick={() => setShowMindMap(false)}
      >
        ✕
      </button>

      <h2 className="text-lg font-semibold mb-2">
        Friends Mind Map
      </h2>

      <FriendsMindMap/>
    </div>

  </div>
)}
    </div>
  );
}