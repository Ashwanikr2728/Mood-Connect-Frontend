import { useState, useEffect, useRef } from "react";
import { api } from "../../lib/api";
import TypingLoader from "../TypingLoader";

type Message = {
  role: "user" | "Solace AI";
  text: string;
};

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const userInput = input.trim();
    if (!userInput || loading) return;

    const userMessage: Message = { role: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    setInput(""); // 🔥 immediately clear
    setLoading(true);

    try {
      const res = await api.post("/api/chat", {
        message: userInput,
      });

      const data = res.data;

      setMessages((prev) => [
        ...prev,
        {
          role: "Solace AI",
          text: data.reply || "I'm here with you. Tell me more.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "Solace AI", text: "Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start py-6">
      <div className="w-full max-w-4xl h-[80vh] flex flex-col rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white/70 backdrop-blur-xl">
        {/* Header */}
        <div className="p-5 backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-sm flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div
              className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 
    flex items-center justify-center text-white shadow-md"
            >
              S
            </div>

            {/* Text */}
            <div>
              <h1 className="text-lg font-semibold text-gray-800 tracking-tight">
                Solace AI
              </h1>
              <p className="text-xs text-gray-500">
                A safe space to express yourself
              </p>
            </div>
          </div>

          {/* Optional subtle status */}
          <div className="text-xs text-green-500">online</div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm transition-all ${
                  msg.role === "user"
                    ? "bg-linear-to-r from-blue-500 to-indigo-500 text-white"
                    : "bg-white/80 backdrop-blur-md text-gray-800 border border-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md text-gray-500 text-sm shadow flex items-center gap-3">
                <span>Solace is thinking...</span>
                <TypingLoader />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white/80 backdrop-blur-xl border-t border-white/40 flex gap-3">
          <input
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-white/90 
          focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="How are you feeling today?"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-5 py-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white 
          font-medium shadow-md hover:scale-[1.03] transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
