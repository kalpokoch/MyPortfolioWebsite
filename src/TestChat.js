import React, { useState } from "react";

function TestChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const res = await fetch("https://kalpokoch-chatbotdemo.hf.space/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.response);
    } catch (err) {
      console.error("Error:", err);
      setAnswer("Error fetching response");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧪 Simple RAG Chat Test</h2>
      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "60%", padding: 8 }}
      />
      <button onClick={handleAsk} style={{ marginLeft: 10, padding: 8 }}>
        Ask
      </button>
      <p><strong>Response:</strong> {answer}</p>
    </div>
  );
}

export default TestChat;
