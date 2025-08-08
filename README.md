# 🏢 StaffHub — Employee Management System

> A modern, role-based employee management web application — manage work hours, HR tasks, payroll and admin workflows.  
> Built with React (Vite), Firebase Auth, Node.js and MongoDB. Fully responsive and production-ready.

---

## 🚀 Live Demo
🌐 [View StaffHub Live Site](https://staff-hub-employee-management.netlify.app/)

---

## 📦 Repositories
| Type      | Link |
|-----------|------|
| 🖥 Client  | https://github.com/islamemon59/employee-management-system-client |
| 🛠 Server  | https://github.com/islamemon59/employee-management-system-server |

---

## 🔐 Admin Login (Demo)
> Use this test account for exploring admin features (demo only).

| Role  | Email       | Password     |
|-------|-------------|--------------|
| Admin | `admin@admin` | `123456bB@` |

---

## ✨ Description
StaffHub is an employee management system with role-based dashboards (Employee, HR, Admin) for tracking work hours, managing payroll, and HR operations. Features include secure authentication, protected API routes, interactive dashboards, and Stripe payments for payroll.

---

## 🚩 Key Features
- ✅ **Role-based access**: Employee, HR, Admin dashboards  
- ✅ **Time tracking**: Log and view daily work entries  
- ✅ **HR tools**: Verify employees & approve payroll  
- ✅ **Admin controls**: Promote users, fire employees, adjust salaries (increase only)  
- ✅ **Stripe Integration**: Secure payroll processing  
- ✅ **JWT-secured API** for protected routes  
- ✅ **Firebase Authentication** (Email/Password + Google OAuth)  
- ✅ **TanStack Query** for fast data fetching  
- ✅ **SweetAlert2 & react-hot-toast** for modern notifications  
- ✅ **Responsive UI** with Tailwind CSS & DaisyUI  
- ✅ **Charts & analytics** with Chart.js or Recharts  

---

## 🛠 Tech Stack
**Frontend**
- React (Vite)  
- React Router  
- Tailwind CSS
- TanStack Query  
- SweetAlert2, react-hot-toast

**Backend**
- Node.js & Express  
- MongoDB Atlas  
- Firebase Auth  
- Stripe API

**Tools & Hosting**
- Git & GitHub  
- Netlify (Client)  
- Postman  
- imgBB (Image uploads)

---

## 📦 Main Dependencies

**Client**
- `react`, `react-dom`  
- `react-router-dom`  
- `axios`  
- `@tanstack/react-query`  
- `tailwindcss`
- `sweetalert2`, `react-hot-toast`  
- `@stripe/stripe-js`

**Server**
- `express`  
- `mongoose`  
- `dotenv`  
- `cors`  
- `jsonwebtoken`  
- `bcryptjs`  
- `stripe`  
- `express-async-handler`  
- `nodemon` (dev)

---

## ⚙️ Environment Variables

**Client (.env)**
```env
VITE_API_URL=https://your-server-url.com
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/staffhub
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
CLIENT_URL=https://staff-hub-employee-management.netlify.app

staffhub/
├─ client/                 # React frontend
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ hooks/
│  │  └─ services/
│  └─ package.json
└─ server/                 # Express backend
   ├─ controllers/
   ├─ models/
   ├─ routes/
   ├─ middlewares/
   └─ package.json

# Client
git clone https://github.com/islamemon59/employee-management-system-client
# Server
git clone https://github.com/islamemon59/employee-management-system-server

cd staffhub-client && npm install
cd ../staffhub-server && npm install

# Client
npm run dev

# Server
nodemon index.js
