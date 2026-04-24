# 🚀 Brand System API

A simple backend application to manage brands, their status, and notes using Node.js, Express, and MongoDB.

---

## 📌 Features

✔ Create a new brand  
✔ View all brands  
✔ Get single brand details  
✔ Update brand status  
✔ Add notes to a brand  
✔ View summary of all brands  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  

---

## ▶️ Run the Project

1. Clone the repository  
   git clone https://github.com/Thanveer546/Branding_Task.git  

2. Open project folder  
   cd Branding_Task  

3. Install dependencies  
   npm install  

4. Create `.env` file and add:  
   PORT=5000  
   MONGO_URI=mongodb://127.0.0.1:27017/branding  

5. Start server  
   node app.js  

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|--------|------------|
| POST   | /api/brands | Create brand |
| GET    | /api/brands | Get all brands |
| GET    | /api/brands/:id | Get single brand |
| PATCH  | /api/brands/:id/status | Update status |
| POST   | /api/brands/:id/notes | Add note |
| GET    | /api/brands/summary | Summary |

---

## 📊 Sample Data

{
  "brand_name": "Adidas",
  "founder_name": "Adi Dassler",
  "category": "Sports",
  "monthly_revenue": 50000,
  "status": "SUBMITTED"
}

---

## 📁 Project Structure

BRANDING/
│── config/
│── controllers/
│── models/
│── routes/
│── app.js
│── package.json
│── README.md

---

## 👨‍💻 Author

Thanveer

---

## ⚠️ Notes

- Do not upload `.env` file  
- Make sure MongoDB is running  

---
