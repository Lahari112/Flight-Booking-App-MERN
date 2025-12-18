 ✈️ Flight Booking App – MERN Stack

A full-stack **Flight Booking Web Application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js)**.
The application allows users to **register, login, search flights, apply filters, book seats, and view their bookings through a modern and responsive interface.

---
 🚀 Features

●👤 User Authentication

* User Registration & Login
* JWT-based Authentication
* Secure protected routes

●🔍 Flight Search & Filters

* Search flights by **From / To**
* Filter by:

  * Date
  * Travel Class (Economy / Business)
  * Airline
  * Price Range
* Dynamic flight listing

●🎫 Booking System

* Book flights with **number of seats**
* Booking confirmation
* View all bookings in **My Bookings** page

● 📊 Booking History

* Displays:

  * Airline
  * Route
  * Departure Time
  * Seats
  * Booking Status
  * Booking Date

🎨 UI & UX

* Attractive landing page
* Background images for pages
* Clean, responsive design
* User-friendly forms and tables

---

🛠️ Technologies Used

● Frontend

* React.js
* React Router DOM
* Axios
* CSS

● Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)

---

📂 Project Structure

```
Flight-Booking-App-MERN/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── styles/
│   │   └── assets/
│
├── server/                 # Node + Express  backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
└── README.md
```

---

 ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Flight-Booking-App-MERN.git
cd Flight-Booking-App-MERN
```

---

 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server`:

```
MONGO_URI=mongodb_connection_string
JWT_SECRET=secret_key
```

Start the backend:

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

📝 Future Enhancements

* Payment gateway integration
* Admin dashboard for flight management
* Seat availability tracking
* Email booking confirmation
* Mobile-responsive improvements

---

👩‍💻 Developed By

**Lahari N**
Full-Stack Developer | MERN Stack
---

