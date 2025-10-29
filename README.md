# 🤖 Drata AI Homepage Assistant (OpenAI + Contentful CMS Integrated)

**Author:** Austin Rooke  
📧 **Email:** austinrooke1125@gmail.com  
📍 **Location:** Friendswood, TX  

---

## 🧠 Overview
This project is a **Next.js 15 + TypeScript + TailwindCSS** web app built as a **Drata Web Experience technical assessment**.  
It showcases an **AI-powered homepage assistant** integrated with both **OpenAI GPT‑4‑Turbo** and **Contentful CMS**, allowing marketing teams to control content dynamically.

---

## 🚀 Key Features

✅ **AI Chat Assistant (GPT‑4)** — Powered by OpenAI’s GPT‑4‑Turbo API for dynamic, context‑aware responses.  
✅ **CMS Integration (Contentful)** — Control greeting messages, assistant enable state, theme, and CTA text via Contentful.  
✅ **Mock CMS Control Panel** — Local preview tool for marketers (`CMSControlPanel.tsx`).  
✅ **Modern UI** — TailwindCSS + Framer Motion animations.  
✅ **SEO‑friendly** — Built on Next.js App Router architecture.  
✅ **Deploy‑ready** — Works perfectly on **Netlify** or **Vercel**.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Framework | Next.js 15 (App Router) |
| Frontend | React 18 + TypeScript + TailwindCSS + Framer Motion |
| AI | OpenAI GPT‑4‑Turbo |
| CMS | Contentful (REST API) |
| Icons | Lucide React |
| Deployment | Netlify / Vercel |

---

## ⚙️ Setup & Local Development

### 1️⃣ Clone the repository
```bash
git clone https://github.com/minionhub/drata-web-assistant-openai.git
cd drata-web-assistant-openai
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Create a `.env.local` file in the root with:
```
OPENAI_API_KEY=sk-your-openai-key-here
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_token_here
```

### 4️⃣ Run development server
```bash
npm run dev
```
Visit 👉 **http://localhost:3000**

---

## 🧠 Contentful CMS Setup

### 1️⃣ Create Model
In [Contentful](https://app.contentful.com/):
- Model name: **assistantSettings**
- Fields:
  - `assistantEnabled` (Boolean)
  - `welcomeMessage` (Short text)
  - `theme` (Short text: "light" or "dark")
  - `ctaText` (Short text)

### 2️⃣ Create Entry
Fill and **Publish** one entry, e.g.:
```
assistantEnabled = true
welcomeMessage = Hi! I’m Drata AI — ask me about compliance automation.
theme = light
ctaText = Book a Demo
```

### 3️⃣ Add API Keys
Get your **Space ID** and **Content Delivery API token** from  
**Settings → API Keys**, then paste them in `.env.local`.

### 4️⃣ Test
Run `npm run dev`, refresh your browser, and your CMS content appears dynamically.

---

## 🧩 Local CMS Preview

For local testing, marketers can use the built‑in **CMSControlPanel** component.  
It simulates the same Contentful data fields and lets you preview content changes instantly.

```tsx
import CMSControlPanel from "../components/CMSControlPanel";
```

It includes:
- ✅ Enable/disable assistant toggle  
- 🎨 Theme selector (light/dark)  
- 💬 Welcome message input  
- 🔘 CTA text field

---

## 🧱 Project Structure

```
src/
 ├── app/
 │   ├── api/chat/route.ts      # Server-side OpenAI integration
 │   ├── layout.tsx             # Root layout (App Router)
 │   ├── page.tsx               # Homepage with CMS + AI integration
 │   ├── globals.css            # Tailwind + base styles
 ├── components/
 │   ├── ChatAssistant.tsx      # Chat UI with GPT responses
 │   ├── CMSControlPanel.tsx    # Local CMS preview panel
 ├── lib/
 │   ├── cms.ts                 # Fetches data from Contentful
 │   ├── llm.ts                 # OpenAI GPT logic abstraction
 └── types/                     # Shared interfaces
```

---

## 🔑 Environment Variables

| Variable | Description |
|-----------|-------------|
| `OPENAI_API_KEY` | OpenAI GPT‑4 API key |
| `CONTENTFUL_SPACE_ID` | Your Contentful space ID |
| `CONTENTFUL_ACCESS_TOKEN` | Content Delivery API key |

---

## 🌐 Deployment

### ➤ Deploy to Netlify
1. Push your repo to GitHub.  
2. On Netlify → **Add New Site → Import from GitHub**.  
3. **Build command:** `npm run build`  
4. **Publish directory:** `.next`  
5. Add your environment variables in *Site settings → Environment variables*.  
6. Click **Deploy** 🎉  

### ➤ Deploy to Vercel
1. Go to [https://vercel.com/new](https://vercel.com/new).  
2. Import your GitHub repo.  
3. Add your env variables.  
4. Click **Deploy Now**.

---

## 🧪 Testing CMS Integration

You can verify CMS integration by changing your Contentful fields and republishing:  
- Change `welcomeMessage` → updates dynamically on site  
- Toggle `assistantEnabled` → hides/shows assistant  
- Update `ctaText` → updates button text  

If you get a fetch error, double‑check:
- API keys in `.env.local`  
- That your entry is **published**, not draft  
- Correct `content_type` = `assistantSettings`  

---

## 🧠 Future Enhancements

- [ ] Add Contentful **Preview Mode** to show unpublished changes  
- [ ] Add real CMS-driven analytics and usage stats  
- [ ] Stream AI responses with OpenAI’s new response‑stream API  
- [ ] Add dark‑mode theming via CMS field  

---

## 🏁 License
© 2025 **Austin Rooke** — For evaluation use only.
