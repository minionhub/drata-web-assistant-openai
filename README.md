# 🤖 Drata AI Homepage Assistant (OpenAI-Powered)

**Author:** Austin Rooke  
📧 **Email:** austinrooke1125@gmail.com  
📍 **Location:** Friendswood, TX  

---

## 🧠 Overview
This project is a **Next.js 15 + TypeScript + TailwindCSS** web app prototype for **Drata’s Web Experience team**.  
It showcases an **AI-powered homepage assistant** that allows users to ask natural language questions about Drata’s platform and receive instant, conversational answers via **OpenAI’s GPT-4-Turbo**.

---

## 🚀 Features
✅ Built with **Next.js 15 (App Router)** and **React 18**  
✅ Modern **Tailwind CSS + Framer Motion** UI  
✅ Live **GPT-4-Turbo** chat integration  
✅ Mock **CMS toggle** for marketers (enable/disable widget)  
✅ SEO-friendly and fully responsive  
✅ Ready for **deployment on Netlify or Vercel**

---

## 🧩 Tech Stack
| Layer | Technology |
|--------|-------------|
| Framework | Next.js 15 |
| Frontend | React 18, TypeScript, Tailwind CSS, Framer Motion |
| Icons | Lucide React |
| AI Model | OpenAI GPT-4-Turbo |
| Deployment | Netlify / Vercel |
| CMS (mock) | Contentful-style toggle control |

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

### 3️⃣ Add your environment variable
Create a `.env.local` file in the root:
```
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### 4️⃣ Run the dev server
```bash
npm run dev
```
Then visit 👉 **http://localhost:3000**

---

## 🧠 Project Structure
```
src/
 ├── app/
 │   ├── api/chat/route.ts      # Server-side OpenAI integration
 │   ├── layout.tsx             # Root layout (App Router)
 │   ├── page.tsx               # Homepage entry point
 │   ├── globals.css            # Tailwind + base styles
 ├── components/
 │   ├── ChatAssistant.tsx      # Chat UI with GPT responses
 │   └── CMSControlPanel.tsx    # Mock CMS toggle
 ├── lib/
 │   └── llm.ts                 # AI helper (future extension)
 └── types/                     # Shared TypeScript interfaces
```

---

## 🔑 Environment Variables
| Variable | Description |
|-----------|--------------|
| `OPENAI_API_KEY` | Your OpenAI API key for GPT-4-Turbo |

💡 Use `.env.local` (already ignored in `.gitignore`).

---

## 🌐 Deployment

### ➤ Deploy to Netlify
1. Push your repo to GitHub.  
2. On Netlify → **Add New Site → Import from GitHub**.  
3. **Build command:** `npm run build`  
4. **Publish directory:** `.next`  
5. Add your **OPENAI_API_KEY** in *Site settings → Environment variables*.  
6. Click **Deploy** 🎉  

### ➤ Or Deploy to Vercel
1. Go to [https://vercel.com/new](https://vercel.com/new).  
2. Import your GitHub repo.  
3. Add your **OPENAI_API_KEY** under Environment Variables.  
4. Click **Deploy Now**.

---

## 🧠 Future Enhancements
- Integrate Contentful CMS for real content control  
- Add analytics tracking via GTM  
- Implement caching + streaming with SWR or Edge Functions  
- Add dark mode and voice input  

---

## 🏁 License
© 2025 **Austin Rooke** — For evaluation use only.
