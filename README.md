# 🗂️ Modern Todo App

A sleek, responsive todo application built with vanilla JavaScript featuring glassmorphism design, dark mode, and smooth animations.

![Todo App Screenshot](https://img.shields.io/badge/Status-Complete-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![CSS3](https://img.shields.io/badge/CSS3-Modern-blue) ![Responsive](https://img.shields.io/badge/Design-Responsive-purple)

## ✨ Features

- **📝 Task Management** - Add, edit, and delete todos with ease
- **✅ Mark Complete** - Check off completed tasks with smooth animations
- **🎯 Smart Filtering** - View All, Active, or Completed tasks
- **🌙 Dark Mode** - Toggle between light and dark themes with visual indicators
- **💾 Persistent Storage** - Tasks and preferences saved locally
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **🎨 Modern UI** - Glassmorphism design with smooth transitions
- **🧹 Bulk Actions** - Clear all completed tasks at once
- **📊 Task Counter** - Real-time count of remaining active tasks

## 🚀 Live Demo

[View Live Demo](https://todo-list-bhanuu.netlify.app/) 

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox, transitions, and glassmorphism effects
- **JavaScript (ES6+)** - Vanilla JS with modern features
- **Local Storage** - Client-side data persistence
- **Responsive Design** - Mobile-first approach

## 📸 Screenshots

### Light Mode
![Light Mode](https://github.com/bhanuu05/ToDo-list/blob/main/ScreenShots/lightTheme.png)

### Dark Mode
![Dark Mode](https://github.com/bhanuu05/ToDo-list/blob/main/ScreenShots/darkTheme.png)

## 🎯 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhanuu05/todo-app.git
   ```

2. **Navigate to project directory**
   ```bash
   cd todo-app
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # OR use a local server
   python -m http.server 8000
   ```

## 💻 Usage

1. **Add a Task**: Type your task in the input field and click "Add" or press Enter
2. **Mark Complete**: Click the checkbox next to any task to mark it complete
3. **Delete Task**: Hover over a task and click the "×" button to delete
4. **Filter Tasks**: Use the "All", "Active", or "Completed" buttons to filter your view
5. **Toggle Theme**: Click the theme toggle in the top-right to switch between light and dark modes
6. **Clear Completed**: Click "Clear Completed" to remove all finished tasks

## 🏗️ Project Structure

```
todo-app/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── app.js             # JavaScript functionality and logic
└── README.md          # Project documentation
```

## ⚡ Key Features Breakdown

### Theme System
- **Smart Detection**: Respects system preference on first visit
- **Visual Feedback**: Sun/moon icons clearly indicate current theme
- **Persistent**: Theme preference saved across sessions

### State Management
- **Local Storage Integration**: All data persists between sessions
- **Error Handling**: Graceful fallbacks if localStorage is unavailable
- **Real-time Updates**: UI immediately reflects all changes

### User Experience
- **Smooth Animations**: Hover effects, transitions, and removal animations
- **Keyboard Support**: Enter key to add tasks, keyboard navigation
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Mobile Optimized**: Touch-friendly interface with responsive design

## 🎨 Design Decisions

- **Glassmorphism**: Modern frosted glass effect for visual appeal
- **Smooth Transitions**: All interactions have smooth 0.3s transitions
- **Color Psychology**: Blue primary color for trust and productivity
- **Minimal Interface**: Clean, distraction-free design focused on tasks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@bhanuu05](https://github.com/bhanuu05)
- LinkedIn: [bhanuu05](https://linkedin.com/in/bhanuu05)

## 🙏 Acknowledgments

- Design inspiration from modern productivity apps
- Glassmorphism trend for the visual aesthetic
- MDN Web Docs for JavaScript references

---

⭐ If you found this project helpful, please consider giving it a star!

---

*Built with ❤️ and vanilla JavaScript*
