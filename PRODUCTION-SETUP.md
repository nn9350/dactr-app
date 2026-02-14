# 🚀 Dactr - Full Stack Production App Setup Guide

## 📦 What You Have Now

A complete **production-ready dental care management system** with:

✅ **Backend API** (Node.js + Express)  
✅ **Database** (MongoDB)  
✅ **Frontend** (HTML + Vanilla JS)  
✅ **Offline Support** (LocalStorage fallback)  
✅ **Bilingual** (English + Hindi)  
✅ **Ready to Deploy** (Render, Railway, Vercel, etc.)

---

## 🎯 Quick Start (Local Development)

### Step 1: Install Backend Dependencies

```bash
cd c:\Users\FC156EE\Downloads\doctor-app\backend
npm install
```

### Step 2: Setup MongoDB Database

#### Option A: MongoDB Atlas (FREE - Recommended)

1. Go to **https://www.mongodb.com/cloud/atlas**
2. Create free account (sign up with Google)
3. Click **"Build a Database"**
4. Choose **M0 FREE** tier
5. Select closest region (Mumbai/Singapore)
6. Click **"Create"**
7. Create database user:
   - Username: `dactr_admin`
   - Password: (generate strong password)
   - Click **"Create User"**
8. Add IP address: Click **"Add My Current IP Address"** (or use `0.0.0.0/0` for any IP)
9. Click **"Finish and Close"**
10. Click **"Connect"** → **"Connect your application"**
11. Copy connection string (looks like `mongodb+srv://...`)

#### Option B: Local MongoDB (For Testing)

```bash
# Install MongoDB locally (optional)
# Download from: https://www.mongodb.com/try/download/community
```

### Step 3: Configure Environment

```bash
# In backend folder, create .env file
cd backend
copy .env.example .env
```

Edit `.env` file:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/dactr?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:8000
```

### Step 4: Start Backend Server

```bash
# From backend folder
npm start
```

You should see:
```
✅ Connected to MongoDB
🚀 Dactr API Server running on port 3000
```

### Step 5: Start Frontend

Open a **new terminal**:

```bash
cd c:\Users\FC156EE\Downloads\doctor-app\public
python -m http.server 8000
```

### Step 6: Test the App

1. Open browser: **http://localhost:8000**
2. Click **"Book Appointment"**
3. Fill form and submit
4. Check browser console - should see "✅ Appointment booked (online)"

---

## 🌐 Deploy to Production (FREE Options)

### Option 1: Render.com (EASIEST - Recommended!)

**Cost**: FREE forever (with some limitations)

#### Steps:

1. **Setup Git Repository**
```bash
cd c:\Users\FC156EE\Downloads\doctor-app
git init
git add .
git commit -m "Initial Dactr production setup"
```

2. **Push to GitHub**
   - Create new repo on **github.com**
   - Named: `dactr-app`
   - Run:
```bash
git remote add origin https://github.com/YOUR-USERNAME/dactr-app.git
git branch -M main
git push -u origin main
```

3. **Deploy on Render**
   - Go to **https://render.com**
   - Sign up with GitHub
   - Click **"New +"** → **"Web Service"**
   - Connect your `dactr-app` repository
   - Settings:
     - **Name**: `dactr-api`
     - **Root Directory**: `backend`
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`
     - **Plan**: Free
   - Click **"Advanced"** → Add Environment Variables:
     - `MONGODB_URI`: (paste your MongoDB Atlas connection string)
     - `NODE_ENV`: `production`
     - `FRONTEND_URL`: `https://dactr-api.onrender.com` (will be your URL)
   - Click **"Create Web Service"**

4. **Deploy Frontend**
   - Click **"New +"** → **"Static Site"**
   - Same repository
   - Settings:
     - **Name**: `dactr-app`
     - **Publish Directory**: `public`
   - Click **"Create Static Site"**

5. **Update Frontend API URL**
   - Edit `public/index.html` line ~715:
```javascript
const API_URL = 'https://dactr-api.onrender.com/api';
```
   - Commit and push:
```bash
git add .
git commit -m "Update API URL"
git push
```

**Your live app**: `https://dactr-app.onrender.com`

---

### Option 2: Railway.app

**Cost**: $5 free credit/month

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
cd c:\Users\FC156EE\Downloads\doctor-app\backend
railway init
railway up

# Add MongoDB
railway add mongodb

# Get MongoDB URL
railway variables
# Copy MONGODB_URL and add to .env
```

---

### Option 3: Vercel (For Static + Serverless)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd c:\Users\FC156EE\Downloads\doctor-app
vercel

# Follow prompts
```

---

## 📊 Test API Endpoints

### Using Browser

Visit: `http://localhost:3000/api/health`

Should see:
```json
{
  "status": "ok",
  "message": "Dactr API is running"
}
```

### Using Postman or cURL

**Create Appointment:**
```bash
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Patient",
    "phone": "9876543210",
    "date": "2026-02-20",
    "time": "morning",
    "problem": "Toothache"
  }'
```

**Get All Appointments:**
```bash
curl http://localhost:3000/api/appointments
```

**Get Stats:**
```bash
curl http://localhost:3000/api/appointments/stats/summary
```

---

## 🔧 Troubleshooting

### Backend won't start

**Error**: "Cannot find module 'express'"
**Fix**:
```bash
cd backend
npm install
```

### MongoDB connection failed

**Error**: "MongooseServerSelectionError"
**Fix**:
- Check MongoDB Atlas → Network Access → Allow your IP
- Verify connection string in `.env`
- Check username/password

### Frontend shows offline

**Error**: "Backend not available - Offline mode"
**Fix**:
- Make sure backend is running on port 3000
- Check browser console for CORS errors
- Verify API_URL in frontend code

### CORS Error

**Error**: "Access-Control-Allow-Origin"
**Fix**: Update backend `.env`:
```env
FRONTEND_URL=http://localhost:8000
```

---

## 📁 Project Structure

```
doctor-app/
├── backend/               # Node.js API Server
│   ├── models/           # Database schemas
│   │   ├── Appointment.js
│   │   └── Clinic.js
│   ├── routes/           # API endpoints
│   │   ├── appointments.js
│   │   └── clinics.js
│   ├── server.js         # Main server file
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables (create this!)
├── public/               # Frontend files
│   ├── index.html        # Main app (with API integration)
│   └── js/
│       └── api.js        # API helper functions
├── dactr-app.html        # Standalone version (no database)
├── package.json          # Root package file
├── vercel.json           # Vercel deployment config
└── Procfile              # Render/Heroku deployment config
```

---

## 🎨 Next Steps & Features to Add

### Already Working ✅
- Book appointments (online + offline)
- Cost calculator
- Emergency tips
- Hindi/English toggle
- Responsive design

### Easy to Add 🟢
- [ ] Email confirmation (use Nodemailer)
- [ ] SMS notifications (use Twilio)
- [ ] WhatsApp reminders (use Twilio WhatsApp)
- [ ] Patient dashboard
- [ ] Dentist login/auth

### Advanced Features 🟡
- [ ] AI photo scan (TensorFlow.js)
- [ ] Payment integration (Razorpay)
- [ ] Analytics dashboard
- [ ] Multi-clinic support
- [ ] Appointment calendar view

---

## 💰 Cost Breakdown

### Free Tier (Perfect for Starting!)
- **Frontend**: Netlify/Vercel/Render - FREE
- **Backend**: Render.com - FREE
- **Database**: MongoDB Atlas - FREE (512MB)
- **Total**: ₹0/month for first 100-500 users

### Paid Tier (For Growth)
- **Backend**: Render - $7/month (always on)
- **Database**: MongoDB Atlas M10 - $10/month (2GB)
- **Domain**: Namecheap - ₹500/year
- **Total**: ~₹1500/month for 1000+ users

---

## 🆘 Get Help

- **MongoDB Atlas Issues**: https://docs.mongodb.com/atlas/
- **Render Deployment**: https://render.com/docs
- **Node.js Help**: https://nodejs.org/docs/

---

## ✅ Deployment Checklist

Before going live:

- [ ] MongoDB Atlas database created
- [ ] Environment variables configured
- [ ] Backend running locally (test at http://localhost:3000/api/health)
- [ ] Frontend running locally (test at http://localhost:8000)
- [ ] Appointment booking works
- [ ] Git repository created
- [ ] Pushed to GitHub
- [ ] Deployed backend to Render
- [ ] Deployed frontend to Render/Netlify
- [ ] Updated frontend API_URL to production backend
- [ ] Tested production deployment
- [ ] Shared link with users!

---

**Your production app will be live at**: `https://dactr-app.onrender.com` or similar! 🎉
