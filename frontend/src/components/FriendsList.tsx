"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock friend data
interface Friend {
  id: number;
  name: string;
  avatar: string;
  messages: { fromMe: boolean; text: string }[];
}

const friends: Friend[] = [
  { id: 1, name: "Alice", avatar: "/avatars/alice.jpg", messages: [] },
  { id: 2, name: "Bob", avatar: "/avatars/bob.jpg", messages: [] },
  { id: 3, name: "Charlie", avatar: "/avatars/charlie.jpg", messages: [] },
];

export default function FriendsList() {
  const [activeFriend, setActiveFriend] = useState<Friend | null>(null);
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (!activeFriend || !messageText.trim()) return;

    activeFriend.messages.push({ fromMe: true, text: messageText });
    setMessageText("");
    setActiveFriend({ ...activeFriend }); // trigger rerender
  };

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200 shadow-lg">
      {/* Permanent Friends Header */}
      <div className="px-4 py-3 border-b border-gray-300 text-lg font-semibold">
        Friends
      </div>

      {activeFriend ? (
        // Chat view
        <Card className="flex flex-col flex-1">
          <CardHeader className="px-4 py-2 border-b border-gray-300">
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
                  <Avatar>
                    <img src={friend.avatar} alt={friend.name} />
                  </Avatar>
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
    </div>
  );
}