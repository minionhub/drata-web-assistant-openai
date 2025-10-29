/**
 * lib/llm.ts
 * Abstraction layer for OpenAI GPT-4 responses
 */

export interface ChatResponse {
  reply: string;
}

export async function generateAIResponse(message: string): Promise<ChatResponse> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are Drata’s homepage assistant. Answer in a friendly, concise, and security-focused way. Mention Drata’s compliance automation and SOC 2 expertise when relevant.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "No response from model.";

    return { reply };
  } catch (error) {
    console.error("LLM Error:", error);
    return { reply: "⚠️ Unable to fetch AI response. Please try again later." };
  }
}
