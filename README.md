# Atlast Iris Consultancy Website

A full-stack web application designed and developed for Atlast Iris Consultancy, aimed at showcasing services, facilitating inquiries, and maintaining a modern business web presence. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the site is fully responsive, API-driven, and production-ready.

## 🌐 Live Demo

🔗 [atirisconsultancy.com](https://atirisconsultancy.com)

## 🗂️ Project Structure

```
consult/
├── backend/       # Node.js + Express server with MongoDB integration
├── frontend/      # React.js frontend styled with Tailwind CSS
├── README.md      # Project documentation
```

## 🚀 Features

- ⚛️ **React Frontend** – Built with modern React (hooks-based), React Router, and Tailwind CSS for dynamic, component-driven UI.
- 🌐 **RESTful Backend API** – Express.js server handling contact form submissions and service endpoints.
- ☁️ **Cloud Database Integration** – MongoDB Atlas used for persistent storage of user inquiries.
- 📬 **Fully Functional Contact Form** – User data submitted through frontend is sent to backend API and stored in the database.
- 🔒 **CORS-secured Communication** – Seamless cross-origin communication enabled via properly configured CORS middleware.
- 🧑‍💻 **Environment-Based Configs** – Uses `.env` files for base URLs and MongoDB credentials across dev/prod.
- 🚀 **CI/CD and Deployment** – Netlify (frontend) and Render (backend) setup with GitHub integration for auto-deploy.

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- Netlify (Hosting)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Dotenv
- CORS
- Render (Hosting)

## 📦 Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account

---

### 🔧 Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Start the backend server:

```bash
npm start
```

---

### 🎨 Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install frontend dependencies:

```bash
npm install
```

3. Create a `.env` file in `/frontend`:

```env
REACT_APP_API_URL=http://localhost:5000
```

4. Start the React development server:

```bash
npm start
```

---

## 📁 Deployment

- **Frontend**: Deployed on [Netlify](https://www.netlify.com/)
- **Backend**: Deployed on [Render](https://render.com/)
- **Database**: Hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Make sure to configure production `.env` variables properly in both Netlify and Render dashboards.

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use, modify, and share it under the terms of the license.

---

## 🙌 Acknowledgements

- Thanks to [MongoDB](https://www.mongodb.com/), [Render](https://render.com/), and [Netlify](https://netlify.com) for providing generous free-tier hosting.
- Designed and developed by [Vijayasandeep](https://github.com/Vijayasandeep)
