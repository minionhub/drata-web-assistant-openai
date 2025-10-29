export interface AssistantSettings {
  assistantEnabled: boolean;
  welcomeMessage: string;
  theme: "light" | "dark";
  ctaText: string;
}

export async function getAssistantSettings(): Promise<AssistantSettings> {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  const url = `https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=assistantSettings`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 60 } // ISR every 60 seconds
  });

  if (!res.ok) throw new Error("Failed to fetch assistant settings");

  const data = await res.json();
  const fields = data.items[0].fields;

  return {
    assistantEnabled: fields.assistantEnabled || false,
    welcomeMessage: fields.welcomeMessage || "Hello! I’m Drata AI.",
    theme: fields.theme || "light",
    ctaText: fields.ctaText || "Learn More"
  };
}
