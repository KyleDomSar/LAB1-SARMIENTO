# Laboratory 1: Git, GitHub, and Branching

## Student Information

**Name:** Kyle Dominick Sarmiento  
**Course:** Bachelor of Science in Information Technology (BSIT)  
**School:** Cavite State University  

---

## Project Description

This laboratory activity focuses on creating a simple personal introduction webpage and managing its development using Git and GitHub.

The project uses HTML, CSS, and JavaScript to create a styled and interactive webpage. Git branches were also used to preserve the original HTML-only version of the project.

# Steps Performed

## 1. Created the Project Folder

A project folder named `lab1_Sarmiento` was created and opened using Visual Studio Code.

## 2. Created the HTML Introduction Webpage

An `index.html` file was created containing personal information, an introduction, interests, and hobbies.

The first version of the project contained only HTML.

## 3. Configured Git

Git username and email were configured before initializing the repository.

```bash
git config --global user.name "Kyle Dominick Sarmiento"
git config --global user.email "your-email@example.com"
```

## 4. Initialized the Local Git Repository

Git was initialized inside the project folder using:

```bash
git init
```

## 5. Created the First Commit

The original HTML-only version of the webpage was added and committed.

```bash
git add index.html
git commit -m "Initial commit: Add HTML introduction page"
```

## 6. Renamed the Main Branch

The default branch was renamed to `main`.

```bash
git branch -M main
```

## 7. Created the No-Style Branch

A branch named `no-style` was created to preserve the original HTML-only version of the webpage.

```bash
git branch no-style
```

The project now had two branches:

- `main`
- `no-style`

## 8. Added CSS Styling

A `style.css` file was created to improve the appearance of the webpage.

The CSS added:

- Modern design and layout
- Colors and background styling
- Responsive design
- Hover effects
- Styled sections and hobby cards

## 9. Added JavaScript Functionality

A `script.js` file was created to add interactivity to the webpage.

JavaScript was used to create an interactive button that displays and hides a welcome message.

## 10. Updated the Main Branch

The complete version of the project containing HTML, CSS, and JavaScript was added and committed to the `main` branch.

```bash
git add .
git commit -m "Improve webpage design and interactivity"
```

## 11. Created a GitHub Repository

A GitHub repository named `LAB1-SARMIENTO` was created.

The repository was created without adding a README file because the local project already contained Git commits.

## 12. Connected the Local Repository to GitHub

The local Git repository was connected to the GitHub repository using:

```bash
git remote add origin https://github.com/KyleDomSar/LAB1-SARMIENTO.git
```

The remote repository was checked using:

```bash
git remote -v
```

## 13. Pushed the Main Branch to GitHub

The complete version of the project was pushed to GitHub.

```bash
git push -u origin main
```

## 14. Pushed the No-Style Branch to GitHub

The `no-style` branch containing the original HTML-only version was also pushed to GitHub.

```bash
git switch no-style
git push -u origin no-style
```

After pushing the branch, the project was switched back to the `main` branch.

```bash
git switch main
```

# Branch Structure

## Main Branch

The `main` branch contains the complete version of the project.

```text
LAB1-SARMIENTO
├── index.html
├── style.css
└── script.js
```

This branch contains:

- HTML structure
- CSS styling
- JavaScript functionality

## No-Style Branch

The `no-style` branch preserves the original version of the project.

```text
LAB1-SARMIENTO
└── index.html
```

This branch contains only the HTML version without CSS styling and JavaScript functionality.

# Technologies Used

The following technologies and tools were used in this laboratory activity:

- HTML
- CSS
- JavaScript
- Git
- GitHub
- Visual Studio Code

# Purpose of the Laboratory

This laboratory activity demonstrates the basic use of Git and GitHub for version control.

The project shows how branches can be used to manage different versions of a project:

- The `main` branch contains the complete styled and interactive webpage.
- The `no-style` branch preserves the original HTML-only version.

Through this activity, Git was used to track changes, create commits, manage branches, and connect a local repository to GitHub.
