'use client';
import React, { useEffect, useState } from "react";

/**
 * Local CMS Control Panel (for development preview)
 * Mirrors Contentful settings so Marketing can test locally.
 */
export default function CMSControlPanel() {
  const [enabled, setEnabled] = useState(true);
  const [theme, setTheme] = useState("light");
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi! I’m Drata AI — ask me about security automation."
  );
  const [ctaText, setCtaText] = useState("Book a Demo");

  // Simulate CMS sync (could later fetch from Contentful API for preview mode)
  useEffect(() => {
    console.log("CMS Settings Updated:", { enabled, theme, welcomeMessage, ctaText });
  }, [enabled, theme, welcomeMessage, ctaText]);

  return (
    <div className="w-full max-w-2xl mb-6 p-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">🧩 CMS Control Panel (Preview Mode)</h2>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          <span>Enable Assistant Widget</span>
        </label>

        <label>
          <span className="block mb-1">Theme</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full border rounded-md px-2 py-1 text-gray-700"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label className="col-span-2">
          <span className="block mb-1">Welcome Message</span>
          <input
            type="text"
            value={welcomeMessage}
            onChange={(e) => setWelcomeMessage(e.target.value)}
            className="w-full border rounded-md px-2 py-1 text-gray-700"
          />
        </label>

        <label className="col-span-2">
          <span className="block mb-1">CTA Text</span>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            className="w-full border rounded-md px-2 py-1 text-gray-700"
          />
        </label>
      </div>

      <p className="mt-3 text-xs text-gray-400">
        * These settings mirror Contentful data and can be used for local CMS previews.
      </p>
    </div>
  );
}
