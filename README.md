# 📋 Cardboard UI – Quote Board App

A responsive React application that allows users to **view, add, and delete motivational quotes** with a clean UI and intuitive UX. Built with modern tools and best practices focusing on **code quality, separation of concerns, and reusability**.

---

## 🔧 Tech Stack

- **Node.js** (v22+)
- **React** (v19+)
- **Vite** (v7+)
- **CSS Modules**
- **MockAPI** (for CRUD operations)

---

## 🚀 Features

- 📜 View a list of quotes
- ➕ Add new quotes (with form validation)
- ❌ Delete existing quotes
- 💬 Error and loading states handled gracefully
- 📱 Fully responsive layout

---

## 📁 Folder Structure

```
cardboard-ui/
.
├── .env
├── .gitignore
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.module.css
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.module.css
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.module.css
│   ├── services/
│   │   └── quoteService.js
│   ├── styles/
│   │   ├── index.css
│   │   └── reset.css
│   ├── utils/
│   │   └── validator.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## ⚙️ Environment Setup

### 1. Clone the repo

```bash
git clone https://github.com/shubhamchasing/cardboard-ui.git
cd cardboard-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup .env file

⚠️ **Important**: Please use the Mock API URL provided in the submission email.
This project was not deployed due to API request limitations on the free MockAPI tier.

```env
VITE_MOCK_API_URL=https://your-mockapi-url.mockapi.io/api
```

### 4. Start the project

```bash
npm run dev
```

---

## 📏 Validation Constraints

- **Author**: max 24 characters
- **Quote text**: max 115 characters
- Both fields are required

---

## 🧪 Future Improvements (Optional)

- Add animation

---

## 📄 License

This project is for educational and assignment purposes.

---

<div align="center">
  <p>Developed with ❤️ by Shubham Sharma</p>
</div>
