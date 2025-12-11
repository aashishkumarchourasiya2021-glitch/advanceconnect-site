Advance Connect - Deploy-ready Vite + React + Tailwind project
-------------------------------------------------------------

Steps to run locally:

1. Install dependencies
   npm install

2. Run dev server
   npm run dev

3. Build
   npm run build

4. Tailwind is pre-configured.

Deploy to Vercel:
- Create a GitHub repo and push these files.
- Sign in to vercel.com with GitHub and import the repo.
- After Vercel builds, add domain: advanceconnect.in
- Vercel will provide DNS records; add them in GoDaddy DNS manager.

Common DNS records (Vercel defaults):
- A Record: Host = @, Value = 76.76.21.21
- CNAME: Host = www, Value = cname.vercel-dns.com

Replace placeholders in src/App.jsx with your real content (phone, email, case studies) when ready.
