# Dactr - Production Dental Care Management System 🦷

<function_calls>
## 🚀 Full-Stack App with Database

**A complete production-ready system for dental clinics in rural India**

### ✅ What's Included:

1. **Backend API** (Node.js + Express + MongoDB)
   - RESTful API for appointments
   - Database persistence
   - Clinic management
   - Statistics and reporting

2. **Frontend App** (HTML + JavaScript)
   - Book appointments online
   - Cost calculator
   - Emergency dental tips
   - English & Hindi support
   - Offline mode with localStorage fallback

3. **Deployment Ready**
   - Configured for Render, Railway, Vercel
   - Free tier deployment options
   - MongoDB Atlas (free database)

---

## 🎯 Quick Start

### 1. Install Backend

```bash
cd backend
npm install
```

### 2. Setup Database

Get FREE MongoDB database:
1. Go to https://www.mongodb.com/cloud/atlas
2. Create account & free cluster
3. Get connection string
4. Copy `backend/.env.example` to `backend/.env`
5. Paste your MongoDB URI in `.env`

### 3. Run Backend

```bash
cd backend
npm start
```

Server runs at: http://localhost:3000

### 4. Run Frontend

```bash
cd public
python -m http.server 8000
```

App runs at: http://localhost:8000

---

## 📚 Documentation

- **[PRODUCTION-SETUP.md](PRODUCTION-SETUP.md)** - Complete setup & deployment guide
- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - Deployment options explained

---

## 🌐 Deploy to Production (FREE!)

### Easiest: Render.com

1. Push code to GitHub
2. Connect to Render.com
3. Deploy backend + frontend
4. **Done!** Get shareable link

**Detailed instructions**: See [PRODUCTION-SETUP.md](PRODUCTION-SETUP.md)

---

## 📁 Project Structure

```
dactr-app/
├── backend/              ← API Server
│   ├── models/          ← Database schemas
│   ├── routes/          ← API endpoints  
│   └── server.js        ← Main server
├── public/              ← Frontend
│   └── index.html       ← Main app
└── dactr-app.html       ← Standalone (no database)
```

## 💡 Tips

- **For testing**: Just open `dactr-app.html` in any browser
- **To share with friends**: Upload to Netlify Drop (takes 30 seconds!)
- **For production**: Deploy to a proper hosting service with backend

## 🔥 What Makes This App Special

✅ **Bilingual** - English & Hindi support  
✅ **Functional** - Working forms, calculator, booking system  
✅ **Rural-ready** - Offline capable, simple interface  
✅ **No installation** - Works on any device with a browser  
✅ **Free to share** - Single HTML file, easy to distribute

---

## 🎉 Your App is Complete!

Open http://localhost:8000/dactr-app.html in your browser to see it in action!

Built for rural India 🇮🇳 | Making dental care accessible for all 🦷
