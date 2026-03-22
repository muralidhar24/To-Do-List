# 📝 To-Do List Web Application

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Student%20Project-blueviolet?style=for-the-badge)

> *"Every great developer started by building something small — this is mine."*

</div>

---

## 👨‍🎓 About This Project

This **To-Do List Web App** is a front-end development project built as part of my academic journey in web development. The goal was to apply core concepts of HTML structure, CSS design, and JavaScript DOM manipulation into a fully functional, real-world application — without using any frameworks or libraries.

| Field | Details |
|-------|---------|
| 📚 **Course / Context** | Web Development / Personal Learning |
| 🗓️ **Year** | 2024 |
| 👤 **Developer** | Dasari Muralidhar |
| 🏫 **Institution** | RV Institute of Technology |
| 🔗 **Live Demo** | *(https://github.com/muralidhar24)* |

---

## 🎯 Project Objectives

The core learning goals behind this project were:

- Understand how **HTML semantics** structure a real application
- Practice **CSS layout techniques** for a clean user interface
- Apply **JavaScript DOM manipulation** to create dynamic behaviour
- Learn how the three core web technologies work **together as one system**
- Build a complete project **from scratch** without relying on frameworks

---

## 🧠 My Learning Journey

This section documents the real challenges I faced and what I learned while building this project.

### 🔴 Challenge 1 — Connecting HTML, CSS & JavaScript
> At first, I didn't understand how the three files communicated with each other.

**What I learned:** The HTML file acts as the skeleton. CSS is linked via `<link>` in the `<head>`, and JavaScript is loaded via `<script>` at the bottom of `<body>`. Each file has a clear, separate responsibility.

---

### 🟡 Challenge 2 — Dynamic Task Rendering
> I struggled to understand how to add tasks to the page without refreshing it.

**What I learned:** JavaScript can create new HTML elements using `document.createElement()` and inject them into the DOM using `.appendChild()`. This was my first real experience with **dynamic rendering**.

---

### 🟢 Challenge 3 — Managing State (Task Counter)
> Keeping the task count accurate after adding, completing, or clearing tasks was tricky.

**What I learned:** I needed to track the **state** of my task list — how many tasks exist, which are complete — and update the UI every time that state changed. This introduced me to the concept of **UI synchronisation**.

---

### 💡 Key Insight
> Building this project taught me that web development is not just about writing code — it's about understanding how **structure, style, and logic** work together as a system.

---

## ✨ Features

- ➕ Add new tasks via input field
- ✔️ Mark tasks as complete with a single click
- 📊 Live counter showing tasks remaining
- 🗑️ Clear all completed tasks at once
- 📭 Empty state message when no tasks exist
- 👥 About Us section with team details (toggle on/off)

---

## 🗂️ Project Structure

```
todo-list/
│
├── index.html        ← App layout and structure (skeleton)
├── style.css         ← Visual design and styling (appearance)
└── script.js         ← Logic and interactivity (behaviour)
```

### Separation of Concerns

One of the most important principles I applied in this project:

| File | Responsibility | Web Layer |
|------|---------------|-----------|
| `index.html` | Structure & content | Presentation Layer |
| `style.css` | Design & layout | Styling Layer |
| `script.js` | Behaviour & logic | Logic Layer |

---

## 🛠️ How to Run

No installations, no dependencies — just open and run.

```bash
# Step 1 — Clone the repository
git clone https://github.com/your-username/todo-list.git

# Step 2 — Navigate into the folder
cd todo-list

# Step 3 — Open in your browser
open index.html
```

Or download the ZIP and double-click `index.html`.

---

## 📖 Skills Demonstrated

| Skill | Applied In |
|-------|-----------|
| HTML5 Semantic Structure | `index.html` — sections, header, buttons |
| CSS Styling & Layout | `style.css` — flexbox, spacing, visibility |
| JavaScript DOM Manipulation | `script.js` — createElement, addEventListener |
| Event Handling | Button clicks, input events |
| Conditional Rendering | Empty state message, hidden sections |
| Code Organisation | Separation of HTML / CSS / JS responsibilities |

---

## 🔮 What I Would Improve Next

Reflecting on this project, here is what I would build next to take it further:

- [ ] **Local Storage** — Save tasks so they persist after page refresh
- [ ] **Edit Tasks** — Allow users to rename a task after creation
- [ ] **Task Priorities** — Label tasks as High / Medium / Low
- [ ] **Responsive Design** — Optimise layout for mobile screens
- [ ] **Accessibility (a11y)** — Add ARIA labels and keyboard navigation support

---

<div align="center">

**Made with dedication as a student learning to build for the web.**

*Dasari Muralidhar · RVIT · 2024*

</div>
