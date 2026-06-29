"use client";

import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Avatar } from "@heroui/avatar";
import { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  sender: "user" | "gemini";
}

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setOpen(!open);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) {
      return;
    }

    const userMessage: Message = { text: input, sender: "user" };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get a response from Gemini.");
      }

      const geminiMessage: Message = { text: data.text, sender: "gemini" };

      setMessages((prev) => [...prev, geminiMessage]);
    } catch (err: any) {
      const message =
        err.message || "An error occurred while fetching a response.";

      setError(message);
      setMessages((prev) => [
        ...prev,
        { text: `Error: ${message}`, sender: "gemini" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Avatar */}
      <div
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={toggleChat}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleChat();
        }}
      >
        <Avatar isBordered color="default" size="lg" src="/pp.png" />
      </div>

      {/* Chat Window */}
      {open && (
        <Card className="fixed bottom-24 right-5 z-50 flex h-[400px] w-80 flex-col rounded-xl">
          <CardBody className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="text-center italic text-default-500">
                Ask me anything about the portfolio!
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] break-words rounded-lg p-3 ${
                  msg.sender === "user"
                    ? "ml-auto self-end bg-primary text-primary-foreground"
                    : "mr-auto self-start bg-default-100 text-foreground"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="mr-auto self-start rounded-lg bg-default-100 p-3 italic text-default-500">
                Typing...
              </div>
            )}
            {error && (
              <div className="p-2 text-center text-danger">{error}</div>
            )}
            <div ref={messagesEndRef} />
          </CardBody>
          <div className="flex items-center gap-2 border-t border-divider p-4">
            <Input
              className="flex-1"
              isDisabled={loading}
              placeholder="Type a message..."
              size="sm"
              value={input}
              onKeyDown={handleInputKeyDown}
              onValueChange={setInput}
            />
            <Button
              color="primary"
              isDisabled={loading || !input.trim()}
              size="sm"
              onPress={handleSend}
            >
              Send
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}
