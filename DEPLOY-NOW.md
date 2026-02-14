# 🚀 Deploy Dactr App - Get Your Shareable Link!

Your code is on GitHub: **https://github.com/nn9350/dactr-app**

Follow these steps to get your live shareable link (15 minutes):

---

## 📦 **STEP 1: Deploy Backend to Render.com** (5 minutes)

### 1.1 Sign Up / Sign In
- Go to: **https://render.com**
- Click **"Get Started"** or **"Sign In"**
- Choose **"Sign in with GitHub"**
- Authorize Render to access your GitHub account

### 1.2 Create Backend Web Service
1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Find and click **"Connect"** next to `nn9350/dactr-app` repository
4. Configure the service:

   **Name:** `dactr-backend` (or any name)  
   **Region:** `Singapore` (closest to Mumbai)  
   **Branch:** `main`  
   **Root Directory:** `backend`  
   **Runtime:** `Node`  
   **Build Command:** `npm install`  
   **Start Command:** `npm start`  
   **Instance Type:** `Free`

5. Click **"Advanced"** and add **Environment Variables**:
   
   | Key | Value |
   |-----|-------|
   | `NODE_ENV` | `production` |
   | `PORT` | `3000` |
   | `MONGODB_URI` | `mongodb+srv://deadsoulpalm_db_user:Doctor%400061@cluster0.xa9drt0.mongodb.net/dactr?retryWrites=true&w=majority&appName=Cluster0` |
   | `FRONTEND_URL` | (Leave empty for now, we'll update this) |

6. Click **"Create Web Service"**
7. Wait 3-5 minutes for deployment to complete
8. **Copy your backend URL** - it will look like:
   ```
   https://dactr-backend-xxxx.onrender.com
   ```

---

## 🌐 **STEP 2: Deploy Frontend to Render** (5 minutes)

### 2.1 Update Frontend API URL
Before deploying frontend, we need to update it to use the production backend URL.

**I'll do this for you - just paste your backend URL here when you get it!**

Example: `https://dactr-backend-xxxx.onrender.com`

### 2.2 Deploy Frontend
1. Go back to Render Dashboard
2. Click **"New +"** → **"Static Site"**
3. Select `nn9350/dactr-app` repository
4. Configure:

   **Name:** `dactr-frontend`  
   **Branch:** `main`  
   **Root Directory:** `public`  
   **Build Command:** (leave empty)  
   **Publish Directory:** `.` (current directory)

5. Click **"Create Static Site"**
6. Wait 2-3 minutes for deployment
7. **Copy your frontend URL:**
   ```
   https://dactr-frontend-xxxx.onrender.com
   ```

---

## 🔧 **STEP 3: Final Configuration** (2 minutes)

### 3.1 Update CORS Settings
1. Go to your **backend service** on Render
2. Click **"Environment"** tab
3. Update `FRONTEND_URL` variable to your frontend URL:
   ```
   https://dactr-frontend-xxxx.onrender.com
   ```
4. Save changes - backend will auto-redeploy

---

## ✅ **STEP 4: Test Your Live App!**

1. Open your frontend URL in browser
2. Try booking an appointment
3. Check if data is saved (refresh page)
4. Test Hindi language toggle
5. Share the link! 🎉

---

## 📱 **Alternative: Deploy Frontend to Netlify** (Faster)

If Render frontend is slow, use Netlify instead:

1. Go to: **https://app.netlify.com**
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose GitHub → Select `dactr-app` repository
5. Configure:
   - **Base directory:** `public`
   - **Build command:** (leave empty)
   - **Publish directory:** `public`
6. Click **"Deploy site"**
7. Get your URL: `https://your-site-name.netlify.app`

---

## 🆘 **Troubleshooting**

### Backend won't start?
- Check MongoDB connection string in environment variables
- Ensure password is URL-encoded: `@` → `%40`
- Verify MongoDB Atlas allows connections from `0.0.0.0/0` (all IPs)

### Frontend shows "Connection failed"?
- Verify backend URL is correct in frontend code
- Check backend is running (visit `/api/health` endpoint)
- Ensure CORS is configured with correct frontend URL

### Free tier sleeping?
- Render free tier sleeps after 15 min inactivity
- First request after sleep takes 30-60 seconds
- Upgrade to paid tier ($7/month) for always-on

---

## 🎯 **Next Steps After Deployment**

1. **Test on mobile devices** - Share link with friends
2. **MongoDB Atlas Security** - Change to specific IP whitelist (optional)
3. **Custom Domain** - Add your own domain name (optional)
4. **PWA Installation** - Users can "Add to Home Screen"
5. **Analytics** - Track usage with Google Analytics (optional)

---

## 📞 **Your Shareable Links Will Be:**

- **Live App:** `https://dactr-frontend-xxxx.onrender.com`  
  *(Share this with users in rural India!)*

- **API Docs:** `https://dactr-backend-xxxx.onrender.com/api/health`  
  *(For developers)*

---

**Need help?** Paste any error messages here and I'll fix them!
