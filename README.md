# Academic Portfolio Website

A personal academic portfolio website designed for GitHub Pages.

## 🚀 Getting Started with GitHub Pages

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **"New"** to create a new repository
3. Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)  
   - This special naming automatically enables GitHub Pages at `https://yourusername.github.io`
   - **OR** name it anything (e.g., `academic-portfolio`) and it will be at `https://yourusername.github.io/academic-portfolio`
4. Set it to **Public**
5. Click **Create repository**

### 2. Upload Your Files

**Option A – GitHub Web Interface (easiest):**
1. Open your new repository
2. Click **"uploading an existing file"**
3. Drag and drop ALL files and folders from this project
4. Click **"Commit changes"**

**Option B – Git command line:**
```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **"Deploy from a branch"**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes, then visit `https://yourusername.github.io` 🎉

---

## ✏️ Customizing Your Site

### Personal Information
Edit `index.html` and replace all placeholder text:

| Placeholder | Replace with |
|-------------|-------------|
| `Your Name` | Your actual name |
| `your.email@institution.edu` | Your email |
| `Your Current Institution` | Your institution name |
| `Prof. Advisor Name` | Your advisor's name |
| Bio text in About section | Your personal bio |

### Adding Your Photo
Replace the photo placeholder divs with actual `<img>` tags:
```html
<!-- In the hero section, replace: -->
<div class="hero-photo-placeholder"><span>Photo</span></div>

<!-- With: -->
<img src="images/your-photo.jpg" alt="Your Name" />
```
Upload your photo to the `images/` folder.

### Adding Publications
Copy a `.pub-card` block in the Publications section and update:
- Publication number (`.pub-number`)
- Date, title, journal, authors
- Synopsis text
- BibTeX citation in `js/main.js` (add to the `citations` object)
- Graphical abstract image

### Adding Research Interests
Copy a `.research-card` block and update the content and `data-category` attribute.
Add a new filter button with the matching `data-filter` value.

### Adding Blog Posts
Copy a `.blog-card` block and update the content. For a full blog, consider:
- Creating individual HTML pages per post (e.g., `blog/post-1.html`)
- Using a static site generator like **Jekyll** (natively supported by GitHub Pages)

### Adding Institution Logos
Replace `.logo-placeholder` divs:
```html
<div class="logo-placeholder">
  <img src="images/uchicago-logo.png" alt="UChicago" />
</div>
```

### Adding Graphical Abstracts
Replace `.pub-img-placeholder` divs:
```html
<div class="pub-img">
  <img src="images/pub1-abstract.png" alt="Graphical abstract" />
</div>
```

---

## 📁 File Structure

```
academic-portfolio/
├── index.html          # Main site (all sections)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactivity (filters, animations, etc.)
├── images/             # Put photos and images here
└── README.md           # This file
```

---

## 🎨 Color Customization

Edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --teal: #3dbdb8;       /* Primary accent */
  --rose: #c97b8a;       /* Secondary accent */
  --gold: #e8a838;       /* Tertiary accent */
  --navy: #1a2a3a;       /* Dark backgrounds */
  --bg: #f0f4f8;         /* Page background */
}
```

---

## 💡 Tips

- **Custom domain**: Add a `CNAME` file with your domain name (e.g., `www.yourname.com`) and configure DNS
- **Google Analytics**: Add your GA4 script just before `</head>` in `index.html`
- **Blog at scale**: For many posts, switch to [Jekyll](https://jekyllrb.com/) with GitHub Pages' native Jekyll support
