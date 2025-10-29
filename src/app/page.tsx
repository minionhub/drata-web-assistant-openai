import ChatAssistant from "../components/ChatAssistant";
import { getAssistantSettings } from "../lib/cms";

export default async function HomePage() {
  const settings = await getAssistantSettings();

  if (!settings.assistantEnabled) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500">
        <p>The assistant is currently disabled by Marketing in CMS.</p>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${
        settings.theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <section className="max-w-2xl w-full bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          {settings.welcomeMessage}
        </h1>
        <ChatAssistant />
        <div className="text-center mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {settings.ctaText}
          </button>
        </div>
      </section>
    </main>
  );
}
