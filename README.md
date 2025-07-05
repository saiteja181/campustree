# 🌳 CampusTree

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Socket.IO-4.7.2-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License">
</div>

<div align="center">
  <h3>🚀 A Modern Full-Stack Social Media Platform FOR NITC STUDENTS </h3>
  <p>Connect, share, and engage with your campus community through real-time interactions</p>
</div>

---
![Web capture_6-7-2025_14958_localhost](https://github.com/user-attachments/assets/db113c48-83fb-432d-8dc6-c242abe47b83)
![Web capture_6-7-2025_14813_localhost](https://github.com/user-attachments/assets/9b3cd50b-15af-45d2-8847-6b85e9f17322)
![Web capture_6-7-2025_14939_localhost](https://github.com/user-attachments/assets/7825edea-7267-4ef0-9e5b-7188a334773e)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Deployment](#-deployment)
- [Support](#-support)

## 🎯 Overview

CampusTree is a feature-rich social media platform designed specifically for campus communities. Built with the MERN stack and enhanced with real-time capabilities through Socket.IO, it offers a seamless experience for students to connect, share content, and stay updated with campus activities.

### Why CampusTree?

- **Real-time Communication**: Instant notifications and live updates
- **Campus-Focused**: Tailored for academic and student communities
- **Modern Architecture**: Built with industry-standard technologies
- **Responsive Design**: Works perfectly on all devices
- **Scalable Backend**: Designed to handle growing user bases

## ✨ Features

### 🔐 Authentication & Security
- JWT-based secure authentication
- Protected routes and session management
- Password encryption with bcrypt
- Rate limiting for API endpoints

### 📱 Social Features
- **Posts**: Create, edit, and delete posts with rich text
- **Interactions**: Like, comment, and share functionality
- **Real-time Updates**: Live notifications and activity feeds
- **User Profiles**: Customizable profiles with image uploads
- **Activity Feed**: Personalized content timeline

### 🎨 User Experience
- Responsive design for all screen sizes
- Dark/Light mode toggle
- Infinite scroll for posts
- Image optimization and lazy loading
- Smooth animations and transitions

### 🔧 Technical Features
- RESTful API architecture
- Real-time WebSocket connections
- File upload handling
- Database optimization
- Error handling and logging

## 🛠 Tech Stack

### Frontend
- **React 18.2** - UI library with hooks and context
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - Authentication tokens
- **Multer** - File upload middleware
- **bcryptjs** - Password hashing

### DevOps & Tools
- **Git** - Version control
- **npm** - Package management
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing
- **helmet** - Security middleware



> Add screenshots of your application here to showcase the UI/UX

## 🚀 Quick Start

Get CampusTree running on your local machine in just a few steps:

```bash
# Clone the repository
git clone https://github.com/saiteja181/campustree.git

# Navigate to project directory
cd campustree

# Install dependencies
npm run install-all

# Set up environment variables
cp .env.example .env

# Start the application
npm run dev
```

Visit `http://localhost:3000` to see the application in action!

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0 or higher) - Comes with Node.js
- **MongoDB** - [Local installation](https://docs.mongodb.com/manual/installation/) or [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Git** - [Download here](https://git-scm.com/)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/saiteja181/campustree.git
   cd campustree
   ```

2. **Install Backend Dependencies**
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set Up Environment Variables**
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

5. **Start MongoDB**
   - **Local MongoDB**: Start your local MongoDB service
   - **MongoDB Atlas**: Use your connection string

6. **Run the Application**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev
   
   # Or run them separately:
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URL=mongodb://localhost:27017/campustree
# For MongoDB Atlas:
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/campustree

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d

# File Upload
MAX_FILE_SIZE=5000000
UPLOAD_PATH=./uploads

# Socket.IO
CLIENT_URL=http://localhost:3000

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Package.json Scripts

The following scripts are available:

```json
{
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "cd client && npm start",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "install-all": "npm install && cd client && npm install",
    "build": "cd client && npm run build",
    "test": "npm run test:server && npm run test:client",
    "test:server": "jest",
    "test:client": "cd client && npm test"
  }
}
```

## 🎮 Usage

### For Users

1. **Registration**: Create an account with your NITC email and password
2. **Login**: Access your account securely
3. **Create Posts**: Share your thoughts, images, and updates
4. **Interact**: Like, comment, and engage with other users' content
5. **Profile**: Customize your profile and upload a profile picture
6. **Real-time**: Receive instant notifications for interactions

### For Developers

1. **API Endpoints**: Use the RESTful API for custom integrations
2. **Real-time Events**: Listen to Socket.IO events for live updates
3. **Database Models**: Extend the MongoDB schemas as needed
4. **Authentication**: Implement JWT-based auth in your features

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
```http
POST /api/auth/register      # Register new user
POST /api/auth/login         # User login
POST /api/auth/logout        # User logout
GET  /api/auth/profile       # Get user profile
PUT  /api/auth/profile       # Update user profile
```

### Posts Endpoints
```http
GET    /api/posts            # Get all posts
GET    /api/posts/:id        # Get specific post
POST   /api/posts            # Create new post
PUT    /api/posts/:id        # Update post
DELETE /api/posts/:id        # Delete post
POST   /api/posts/:id/like   # Like/unlike post
```

### Comments Endpoints
```http
GET    /api/posts/:id/comments     # Get post comments
POST   /api/posts/:id/comments     # Add comment
PUT    /api/comments/:id           # Update comment
DELETE /api/comments/:id           # Delete comment
```

### Socket.IO Events
```javascript
// Client-side event listeners
socket.on('newPost', (post) => { /* Handle new post */ });
socket.on('newComment', (comment) => { /* Handle new comment */ });
socket.on('newLike', (like) => { /* Handle new like */ });
socket.on('notification', (notification) => { /* Handle notification */ });
```

## 📁 Project Structure

```
campustree/
├── 📁 client/                    # React frontend
│   ├── 📁 public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── 📁 src/
│   │   ├── 📁 components/        # Reusable UI components
│   │   │   ├── Header.js
│   │   │   ├── PostCard.js
│   │   │   └── CommentForm.js
│   │   ├── 📁 pages/             # Page-level components
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Profile.js
│   │   ├── 📁 redux/             # State management
│   │   │   ├── store.js
│   │   │   ├── authSlice.js
│   │   │   └── postsSlice.js
│   │   ├── 📁 hooks/             # Custom React hooks
│   │   ├── 📁 utils/             # Utility functions
│   │   ├── 📁 styles/            # CSS and styling
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── 📁 server/                    # Backend API
│   ├── 📁 controllers/           # Route handlers
│   │   ├── authController.js
│   │   ├── postsController.js
│   │   └── commentsController.js
│   ├── 📁 middleware/            # Custom middleware
│   │   ├── auth.js
│   │   ├── upload.js
│   │   └── errorHandler.js
│   ├── 📁 models/                # Database models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── 📁 routes/                # API routes
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── comments.js
│   ├── 📁 utils/                 # Helper functions
│   └── 📁 uploads/               # File uploads
├── 📁 socket/                    # Socket.IO configuration
│   └── socketHandlers.js
├── server.js                     # Main server entry point
├── socketServer.js               # Socket.IO server
├── .env                          # Environment variables
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
├── package.json                  # Backend dependencies
└── README.md                     # Project documentation
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Process

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/campustree.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, commented code
   - Follow the existing code style
   - Add tests for new features

4. **Commit Your Changes**
   ```bash
   git commit -m "Add: amazing new feature"
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

### Code Style Guidelines

- Use ES6+ JavaScript features
- Follow React best practices and hooks patterns
- Write self-documenting code with clear variable names
- Add comments for complex logic
- Use Prettier for code formatting
- Follow conventional commit messages

### Reporting Issues

If you find a bug or have a feature request, please:

1. Check existing issues first
2. Create a detailed issue report
3. Include steps to reproduce (for bugs)
4. Suggest solutions or improvements

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

1. **Build the application**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `client/build`

3. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Backend Deployment (Heroku/Railway)

1. **Create a Procfile**
   ```
   web: node server.js
   ```

2. **Deploy to Heroku**
   ```bash
   heroku create campustree-api
   heroku config:set NODE_ENV=production
   heroku config:set MONGO_URL=your_mongodb_atlas_url
   git push heroku main
   ```

3. **Deploy to Railway**
   - Connect your GitHub repository
   - Set environment variables
   - Deploy automatically

### Database Deployment (MongoDB Atlas)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Add your connection string to environment variables
4. Configure network access and database users


## 🙋‍♂️ Support

### Get Help

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs or request features on GitHub Issues
- **Email**: Contact the maintainer at [kuramdasusaiteja@gmail.com]

### FAQ

**Q: How do I reset my password?**
A: Currently, password reset is not implemented. You can manually update the password in the database or implement the feature.

**Q: Can I use this for commercial purposes?**
A: Yes.

**Q: How do I add new features?**
A: Fork the repository, create a feature branch, implement your changes, and submit a pull request.

**Q: Is there a live demo?**
A: please deploy your own instance.



