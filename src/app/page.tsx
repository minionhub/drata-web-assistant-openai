'use client';
import ChatAssistant from "../components/ChatAssistant";
import CMSControlPanel from "../components/CMSControlPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <CMSControlPanel />
      <section className="max-w-2xl w-full bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Drata AI Homepage Assistant (OpenAI Version)
        </h1>
        <ChatAssistant />
      </section>
    </main>
  );
}
