# Lost Packets

**Lost Packets** is a clean, hacker-inspired Hugo theme designed for developers, tinkerers, and command-line enthusiasts. Built with performance and simplicity in mind, it features a dark aesthetic, mobile-first layout, and easy customization.

(ToDo Add screenshot) ![Screenshot](https://packetsandcode.com/images/lost-packets-preview.png) <!-- optional -->

---

## 🚀 Features

- Minimalist dark theme with monospace typography
- Fully responsive layout
- Sticky footer with nerdy personality
- Custom blog list with summaries and grid layout
- Supports page/post separation (About, Contact, etc.)
- Lightweight and fast — no external JS frameworks
- Easily extendable with partials and shortcodes

---

## 📦 Installation

### Option 1: Clone directly into your Hugo site

```bash
cd themes
git clone git@github.com:jasonevensen/lost-packets.git
```

Then in your `config.toml`:

```toml
theme = "lost-packets"
```

### Option 2: Add as a Git submodule

```bash
git submodule add git@github.com:jasonevensen/lost-packets.git themes/lost-packets
```

---

## 🧠 Usage

Start building your Hugo site using the structure below:

```bash
hugo new site mysite
cd mysite
git init
git submodule add git@github.com:jasonevensen/lost-packets.git themes/lost-packets
```

Add your content in `/content/`, and pages like:

- `/about/`
- `/contact/`
- `/blog/first-post.md`

To generate a blog summary, insert `<!--more-->` into your post content to split the preview.

---

## ✏️ Customization

Want to tweak layout or colors? Override the theme’s partials in your root site’s `layouts/` folder.

You can also override:

- `styles.css` (from `/static/css/`)
- `footer.html`, `header.html`, etc.
- `baseof.html` to change page structure

---

## 🙋‍♂️ Author

Built by [Jason Evensen](https://jasonevensen.com)  
Inspired by a love of clean code, strong coffee, and full-throttle packet flows.

---

## 🧪 Status

Currently used for:

- [jasonevensen.com](https://jasonevensen.com)
- [packetsandcode.com](https://packetsandcode.com)

---

## 🛡 License

MIT — use it, break it, fork it, improve it.

---

**Keep your code clean, your ports closed, and your packets moving forward.**
