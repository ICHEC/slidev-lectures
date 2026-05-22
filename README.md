# ICHEC Slidev Presentation Template

This is the official [Slidev](https://sli.dev/) template repository for creating ICHEC presentations. It comes pre-configured with our corporate layouts, reusable components, and an automated deployment pipeline to GitHub Pages.

---

## 🚀 Getting Started

### 1. Create your repository
Do not clone this repository directly. Instead, generate your own repository from this template:
1. Click the green **[Use this template]** button at the top right of this GitHub page.
2. Select **Create a new repository**.
3. Name your repository (e.g., `lecture-intro-to-hpc`) and make it public or private.
4. Clone *your new repository* to your local machine.

### 2. Install dependencies
Ensure you have Node.js (v24 recommended) and Yarn installed, then run:

```bash
yarn install
```

### 3. Start the development server
Run the following to start a live-reloading local server:

```
yarn dev
```

Open your browser to http://localhost:3030. Any changes you make to your markdown files will instantly update in the browser.

## ✍️ Writing Your Slides

Your presentation lives in slides.md. Slidev uses standard Markdown, plus a few special features.
Basic Syntax

Separate slides using three dashes (`---`).

```markdown
# Slide 1
Welcome to the presentation!

---

# Slide 2
Here is a bulleted list:
- Point A
- Point B
```

### Multiple Presentations in One Repo?

By default, yarn dev and the build scripts look for slides.md. If you want to create multiple different presentations within this same repository, simply create new markdown files and pass the filename to the command:

```bash
yarn dev my-other-lecture.md
```

> [!note] Note: If you do this, you will also need to update the build script in package.json to build the correct file before deployment.

## 🎨 Using ICHEC Custom Layouts & Components

This template includes custom ICHEC styling out-of-the-box.

**Layouts**

You can change the layout of any slide by adding a "frontmatter" block at the top of the slide. Our available layouts (found in the layouts/ folder) include:

    brand-title: Use this for your opening slide.

    text-image: A two-column layout for text and an image.


**Example:**

```yaml
---
layout: brand-title
---

# Introduction to High Performance Computing
Speaker: Jane Doe
```

### Components

We have built custom Vue components (found in the components/ folder) that you can use directly inside your markdown as HTML tags.

**Example:**

```html
This is standard text, but you can highlight important warnings using our banner component:

<Banner type="warning">

  Example: Please ensure you are connected to the VPN before proceeding.

</Banner>

You can also use <FancyText>Gradient Text</FancyText> to make titles pop!
```

> [!important] As the above example make sure to have a blank line surrounding your content. It helps sli.dev to properly process the markdown.

## 🚢 Deployment

You do not need to build your slides manually!

This repository is configured with GitHub Actions. Whenever you commit and push changes to the main branch, GitHub will automatically:

1. Build your Slidev presentation.

2. Deploy it securely to GitHub Pages.

**To enable this on your newly created repository:**

1. Go to your repository Settings.

2. Click on Pages in the left sidebar.

3. Under Build and deployment, change the Source dropdown to GitHub Actions.

Your slides will be live at https://ICHEC.github.io/your-repo-name a few minutes after your first push!

## 📚 Resources

1. [Slidev Documentation](https://sli.dev/)

2. [Markdown Syntax Guide](https://sli.dev/guide/syntax)

3. [Available Icons (Iconify)](https://icones.js.org/)
