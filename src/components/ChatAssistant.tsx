'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Loader2 } from "lucide-react";

export default function ChatAssistant() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendToOpenAI = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: query }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Oops! Something went wrong fetching the response.",
        },
      ]);
    }

    setQuery("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* Chat container */}
      <div className="border border-gray-200 rounded-2xl shadow-inner p-4 h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`my-2 flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 border border-gray-200 rounded-bl-none"
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-gray-500 mt-2"
          >
            <Loader2 className="animate-spin w-4 h-4" />
            <span>Drata Assistant is thinking...</span>
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendToOpenAI()}
          placeholder="Ask Drata about security automation, compliance, SOC 2..."
          className="flex-grow rounded-full border border-gray-300 bg-white px-5 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendToOpenAI}
          disabled={loading}
          className="absolute right-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md transition-all disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Send size={18} />}
        </button>
      </div>

      {/* Branding */}
      <div className="flex justify-center mt-2 text-xs text-gray-400">
        <Sparkles className="w-3 h-3 mr-1" /> Powered by GPT-4 • Drata Web Experience Prototype
      </div>
    </div>
  );
}
