# Kamelia Mahmoud — Software Engineer Portfolio

A modern, responsive personal portfolio website built with **HTML, CSS, and vanilla JavaScript**.

The portfolio showcases my background as a Software Engineering graduate, technical skills, selected projects, education, internship experience, and contact information.

## ✨ Features

* **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
* **Modern Dark UI** — Professional developer-focused visual design.
* **Smooth Navigation** — Anchor-based navigation with smooth scrolling.
* **Responsive Mobile Menu** — Collapsible navigation menu for smaller screens.
* **Active Navigation State** — Automatically highlights the section currently being viewed.
* **Scroll Animations** — Sections and content reveal smoothly as they enter the viewport.
* **Animated Skill Bars** — Skill progress bars animate when the Skills section becomes visible.
* **Interactive Code Card** — Developer code card responds to mouse movement with a 3D effect.
* **Cursor Glow Effect** — Subtle interactive cursor lighting effect on desktop.
* **Floating UI Elements** — Animated cards and visual elements in the hero section.
* **Automatic Copyright Year** — The footer year is generated dynamically using JavaScript.
* **Accessibility Considerations** — Includes navigation labels, semantic sections, and reduced-motion support.
* **External Links** — Direct email and LinkedIn contact options.

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

### Design & UI

* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* CSS Animations
* CSS Transitions
* Responsive Media Queries
* Google Fonts:

  * Inter
  * Space Grotesk

### JavaScript APIs

* DOM Manipulation
* Intersection Observer API
* `window.matchMedia()`
* Mouse Events
* Scroll Events

## 📁 Project Structure

```text
portfolio/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the complete structure of the portfolio, including:

* Navigation bar
* Hero section
* About section
* Skills section
* Projects section
* Experience and education timeline
* Contact section
* Footer

### `style.css`

Contains all styling and responsive behavior, including:

* Color variables
* Layouts
* Typography
* Cards
* Buttons
* Progress bars
* Animations
* Hover effects
* Responsive layouts
* Mobile navigation styling
* Reduced-motion support

### `script.js`

Provides the website's interactive functionality:

* Dynamic copyright year
* Sticky/scrolled navigation effect
* Mobile navigation toggle
* Scroll reveal animations
* Animated skill bars
* Active navigation section detection
* Cursor glow
* Interactive 3D code card

## 📌 Website Sections

### 1. Hero

Introduces me as a Software Engineer and highlights my main career focus:

* Full-Stack Development
* Backend Development
* Web Development

It also displays quick information about my graduation year, GPA, and university.

### 2. About Me

Provides an overview of my Software Engineering background, education, technical foundation, and career direction.

### 3. Skills

The skills section is divided into:

**Programming Languages**

* Java
* JavaScript
* Python
* HTML5 / CSS3
* SQL

**Development Technologies**

* React
* Node.js
* FastAPI
* MongoDB
* Flutter
* Three.js

**Engineering Skills**

* Object-Oriented Programming
* Data Structures
* Algorithms
* Problem Solving
* Database Systems
* REST APIs
* Software Testing
* Git / GitHub
* Debugging
* Responsive Design
* API Integration
* MVVM

**Other Technologies**

* Blender
* PyTorch
* Hugging Face
* VS Code

### 4. Projects

The portfolio currently showcases:

#### Arabic Speech & Text to Sign Language

An end-to-end graduation project that converts Arabic speech or text into Arabic Sign Language animations using a Flutter Web interface, FastAPI backend, speech processing, and a Three.js 3D avatar.

**Technologies:** FastAPI, Flutter, Three.js, Python, PyTorch

#### Weather Forecast Application

A responsive React application that consumes external weather APIs and displays current weather conditions and forecasts with API error handling.

**Technologies:** React, JavaScript, REST API, CSS

#### Shopping Web Application

A full-stack e-commerce focused application developed while practicing modern frontend, backend, and database development workflows.

**Technologies:** React, Node.js, MongoDB

#### Distributed Shopping System

A Java academic project demonstrating distributed application development, Remote Method Invocation, and client-server communication.

**Technologies:** Java, RMI, OOP

#### Multithreaded Elevator System

A Java simulation project focused on concurrency, threads, synchronization, and object-oriented design.

**Technologies:** Java, Threads, OOP

#### React Calculator Application

An interactive calculator application built with React, featuring expression handling, user input states, and a responsive interface.

**Technologies:** React, JavaScript, CSS

## 🎓 Education

**The British University in Egypt (BUE)**
Faculty of Informatics & Computer Science
**B.Sc. Software Engineering — 2026**

* Degree Classification: Very Good with Honors
* GPA: 3.1 / 4.0

## 💼 Experience

### IT Department Intern — Valero Developments

**August 2025 — September 2025**

* Supported the management of company hardware, software, and network resources.
* Assisted with troubleshooting and day-to-day IT operations.

## 📚 Professional Training

* Software Testing — ITI
* Data Analysis — AITB
* Digital Marketing — ITTI

## 📱 Responsive Design

The website adapts to different screen sizes using CSS media queries.

Supported layouts include:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation automatically changes to a mobile menu on smaller screens, while grids and timelines adapt to single-column layouts.

## ⚡ Animations & Interactions

The website uses lightweight native browser functionality instead of external JavaScript animation libraries.

### Scroll Reveal

The `IntersectionObserver` API detects when elements enter the viewport and adds a `visible` class.

### Skill Animations

Skill bars start at `0%` and animate to their configured percentage when the Skills section becomes visible.

### Active Navigation

The current section is detected while scrolling and its corresponding navigation link receives the active state.

### Cursor Glow

Desktop users receive a subtle cursor-following glow effect.

### Interactive Code Card

The developer code card uses mouse position to create a subtle 3D perspective effect.

### Reduced Motion

The website respects the user's operating system motion preference through:

```css
@media (prefers-reduced-motion: reduce)
```

## 🚀 Getting Started

No framework, package manager, or build process is required.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
```

### 2. Open the project

```bash
cd your-portfolio
```

### 3. Run the website

You can simply open:

```text
index.html
```

in your browser.

For a better development experience, you can also use the **Live Server** extension in VS Code.

## 🌐 Deployment

Because this is a static website, it can be deployed using services such as:

* GitHub Pages
* Netlify
* Vercel

No backend server is required to run the portfolio itself.

## 🔒 Privacy & Security

This portfolio is a static frontend project and does not contain:

* API keys
* Passwords
* Database credentials
* Authentication secrets
* Private backend configuration

The website only contains public professional information and links.

## 📬 Contact

**Kamelia Mahmoud**
Software Engineer
Cairo, Egypt

**Email:** [kameliamahmoud5@gmail.com](mailto:kameliamahmoud5@gmail.com)

**LinkedIn:** linkedin.com/in/kamelia-mahmoud-8410963b2

## 📄 License

This project is intended as a personal portfolio website.

You are welcome to use the project structure and ideas for learning and inspiration, but personal content, branding, and professional information belong to the portfolio owner.

---

### Built With

**HTML • CSS • JavaScript**

> Designed and developed by Kamelia Mahmoud.
