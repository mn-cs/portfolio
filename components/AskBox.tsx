// components/ChatButton.tsx
"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@heroui/button"; // Assuming @heroui/button exists
import { Input } from "@heroui/input"; // Assuming @heroui/input exists
import { Avatar } from "@heroui/avatar"; // Assuming @heroui/avatar exists
import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect

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

  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

  const toggleChat = () => setOpen(!open);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        body: JSON.stringify({ prompt: input }), // Send user's input as prompt
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get a response from Gemini.");
      }

      const geminiMessage: Message = { text: data.text, sender: "gemini" };
      setMessages((prev) => [...prev, geminiMessage]);
    } catch (err: any) {
      console.error("Error calling Gemini API:", err);
      setError(err.message || "An error occurred while fetching a response.");
      const errorMessage: Message = {
        text: `Error: ${err.message || "Something went wrong."}`,
        sender: "gemini",
      };
      setMessages((prev) => [...prev, errorMessage]); // Add error message to chat
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Allow Shift+Enter for new lines if needed
      e.preventDefault(); // Prevent new line in input
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Avatar */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggleChat}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleChat();
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <Avatar src="/pp.png" size="lg" isBordered color="default" />
      </div>

      {/* Chat Window */}
      {open && (
        <Card
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "320px",
            height: "400px",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.75rem",
          }}
        >
          <CardBody className="overflow-y-auto flex-1 p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 italic">
                Ask me anything about the portfolio!
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-800 self-end ml-auto" // Question messages on the right
                    : "bg-gray-100 text-gray-800 self-start mr-auto" // Answer messages on the left
                }`}
                style={{ wordBreak: "break-word" }} // Ensure long words wrap
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="self-start mr-auto text-gray-500 italic p-3 rounded-lg bg-gray-100">
                Typing...
              </div>
            )}
            {error && (
              <div className="text-red-500 text-center p-2">{error}</div>
            )}
            <div ref={messagesEndRef} /> {/* For auto-scrolling */}
          </CardBody>
          <div className="p-4 flex gap-2 items-center border-t border-gray-200">
            {" "}
            {/* Added border-t */}
            <Input
              size="sm"
              placeholder="Type a message..."
              value={input}
              onValueChange={setInput}
              className="flex-1"
              onKeyDown={handleInputKeyDown}
              isDisabled={loading} // Disable input while loading
            />
            <Button
              size="sm"
              onClick={handleSend}
              isDisabled={loading || !input.trim()} // Disable send button while loading or input is empty
              color="primary" // Assuming NextUI/HeroUI button has 'color' prop
            >
              Send
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}

// "use client";

// import { Card, CardBody } from "@nextui-org/card";
// import { Button } from "@heroui/button";
// import { Input } from "@heroui/input";
// import { Avatar } from "@heroui/avatar";
// import { useState } from "react";

// export default function ChatButton() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState<string[]>([]);

//   const toggleChat = () => setOpen(!open);

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages((prev) => [...prev, input]);
//       setInput("");
//     }
//   };

//   return (
//     <>
//       {/* Floating Avatar */}
//       <div
//         onClick={toggleChat}
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           cursor: "pointer",
//           zIndex: 1000,
//         }}
//       >
//         <Avatar
//           src="/mike.jpg" // replace with your image
//           size="lg"
//           isBordered
//           color="primary"
//         />
//       </div>

//       {/* Chat Window */}
//       {open && (
//         <Card
//           style={{
//             position: "fixed",
//             bottom: "100px",
//             right: "20px",
//             width: "320px",
//             height: "400px",
//             zIndex: 1001,
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <CardBody className="overflow-y-auto flex-1 space-y-2 text-sm">
//             {messages.map((msg, i) => (
//               <div key={i} className="p-2 bg-default-100 rounded-md">
//                 {msg}
//               </div>
//             ))}
//           </CardBody>
//           <div className="p-2 flex gap-2 items-center">
//             <Input
//               size="sm"
//               placeholder="Type a message..."
//               value={input}
//               onValueChange={setInput}
//               className="flex-1"
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <Button size="sm" onClick={handleSend}>
//               Send
//             </Button>
//           </div>
//         </Card>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function AskBox() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!prompt.trim()) {
//       setError("Please enter a prompt.");
//       return;
//     }

//     setLoading(true);
//     setResponse("");
//     setError("");

//     try {
//       const res = await fetch("/api/ask", {
//         // Correct path to your API route
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Something went wrong.");
//       }

//       setResponse(data.text);
//     } catch (err: any) {
//       console.error("Frontend error:", err);
//       setError(err.message || "Failed to get a response.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="m-5 flex">
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Mike anything..."
//           rows={5}
//           className="w-full max-w-[400px] p-2 border rounded"
//           disabled={loading}
//         />
//         <button
//           type="submit"
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? "Generating..." : "Ask Mike"}
//         </button>
//       </form>

//       {error && <p className="mt-4 text-red-500">{error}</p>}
//       {response && (
//         <div className="mt-4 p-4 rounded">
//           <h3 className="font-bold">Mike's Response:</h3>
//           <p className="whitespace-pre-wrap">{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }
