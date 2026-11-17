# ☕ Brew & Bloom Café – Professional Website

> **A live pitch project** · HTML / CSS / JavaScript · Zero dependencies · Fully responsive · Real photography throughout

---

## 🚀 Live Demo

Open `index.html` in any browser — no server, no build step required.

---

## 📁 Project Structure

```
LBW/
├── index.html   – Full single-page website (semantic HTML5)
├── style.css    – All styles (custom properties, CSS Grid, animations)
├── app.js       – Menu tabs, carousel, form validation, scroll spy, reveal
└── README.md    – This file + pitch explanation
```

---

## ✨ Features Built

| Feature | Detail |
|---|---|
| **Sticky navbar** | Transparent on load → dark glass on scroll, active link highlighting via scroll spy |
| **Hero section** | Full-screen real café photo with dark overlay, animated headline, two CTAs |
| **Highlights bar** | Awards, sourcing, baking, and star rating trust signals |
| **About section** | Real barista photo, founder story, animated "7+ Years" badge card |
| **Interactive menu** | 4 tabs × 4 items each — every item has a real food photograph |
| **Menu image fallback** | `onerror` handler ensures layout never breaks if a URL fails |
| **Photo gallery** | 6-slot CSS Grid masonry with real café/food photos, hover zoom effect |
| **Testimonial carousel** | Auto-advancing with dot navigation, pauses on hover |
| **Online order form** | Full validation, loading state, success confirmation |
| **Contact section** | Address, hours, phone, email, socials, map placeholder |
| **Scroll reveal** | IntersectionObserver-powered fade-in animations |
| **Mobile-first** | Hamburger menu, stacked layouts, touch-friendly at all breakpoints |

---

## 🖼️ Real Images Used

All photos are free-to-use from [Unsplash](https://unsplash.com) — loaded directly by URL, no downloads needed.

### Hero & Structural
| Location | Subject |
|---|---|
| Hero background | Cosy café interior with warm ambient lighting |
| About section | Barista carefully pouring latte art |

### Gallery (6 photos)
| Slot | Subject |
|---|---|
| Main Room (large) | Café interior with wooden tables |
| Latte Art | Close-up latte art in a white cup |
| Morning Bakes | Fresh croissants on a tray |
| Garden Terrace (tall) | Sunny outdoor café terrace with plants |
| Brunch Plate | Avocado toast and eggs plate |
| The Bean Bar | Coffee beans and espresso bar |

### Menu Cards (16 photos)

**Coffee**
| Item | Photo |
|---|---|
| Signature Flat White | Flat white in a ceramic cup |
| Cold Brew Float | Iced coffee with cream |
| Matcha Oat Latte | Green matcha in a glass |
| Single Origin Pour-Over | Barista hand-brewing pour-over |

**Other Drinks**
| Item | Photo |
|---|---|
| Loose-Leaf Chai | Spiced chai in a glass mug |
| Hibiscus Lemonade | Vibrant pink drink |
| Dark Hot Chocolate | Rich cocoa in a white mug |
| Rose Steamer | Steamed milk with dried petals |

**Pastries & Bakes**
| Item | Photo |
|---|---|
| Butter Croissant | Golden flaky croissant on wood |
| Blueberry & Lemon Scone | Scone with clotted cream |
| Banana Walnut Loaf | Sliced loaf on a plate |
| Brown Butter Cookie | Cookie with sea salt flakes |

**All-Day Brunch**
| Item | Photo |
|---|---|
| Smashed Avocado Toast | Sourdough with avocado & dukkah |
| Eggs Your Way | Poached eggs with roasted tomatoes |
| Ricotta Hotcakes | Fluffy pancake stack with berries |
| Grain Bowl | Colourful quinoa and vegetable bowl |

---

## 🎯 Pitch Explanation – How This Website Grows the Business

### The Problem Most Local Cafés Face

A café can serve the best flat white in the city and still lose foot traffic to a chain with a polished app and Google presence. When someone searches "café near me," the business without a website — or with an outdated one — loses the click before the coffee is even considered.

### What This Website Solves

**1. First impressions that match the in-café experience**
Real photography of the actual drinks, food, and space means a customer's expectation matches reality the moment they walk in. Stock illustrations or emojis signal low effort; real images signal pride.

**2. Online orders captured directly — no commission fees**
Delivery platforms (UberEats, DoorDash) charge 15–30% per order. This built-in pickup order form sends orders directly to the owner via a backend of their choice (Formspree, EmailJS, or a simple PHP mailer), saving significant margin on every transaction.

**3. Menu clarity drives higher spend**
The tabbed menu with photos and pricing means customers arrive having already decided what they want — and often having noticed items they wouldn't have known to ask for (the Cold Brew Float, the Grain Bowl). That's upsell without any staff effort.

**4. Trust signals before the first visit**
The "Best Café 2024" badge, 4.9-star rating, farm-to-table sourcing note, and real testimonials all do the work of convincing a first-time visitor before they leave their house.

**5. Mobile-first by design**
Over 65% of local business searches happen on phones. Every layout, button size, and image breakpoint was designed for mobile first and scaled up — not shrunk down.

**6. SEO-ready structure**
Semantic HTML (`<header>`, `<section>`, `<nav>`), a descriptive `<meta>` tag, and a meaningful `<title>` give search engines everything needed to index and rank the page correctly.

### Business Metrics This Website Can Directly Affect

| Metric | How |
|---|---|
| **New customer acquisition** | Google indexes the site; searches convert to visits |
| **Average order value** | Menu photos encourage multi-item orders |
| **Repeat visits** | "Follow us" social links build an ongoing audience |
| **Operational efficiency** | Online pickup orders reduce phone call volume |
| **Commission savings** | Direct orders bypass third-party delivery fees |

---

## 🛠️ Tech Stack

| Layer | Detail |
|---|---|
| **HTML5** | Semantic markup, accessible labels, `aria` attributes, no external dependencies |
| **CSS3** | Custom properties, CSS Grid, Flexbox, `clamp()`, `aspect-ratio`, `object-fit` |
| **JavaScript (ES6+)** | Vanilla JS — no frameworks, no build tools, no `node_modules` |
| **Fonts** | System font stack only (`Georgia`, `system-ui`) — zero external requests |
| **Images** | Unsplash direct URLs with `onerror` fallback on every menu image |

---

## 📋 How to Customise for a Real Café Owner

1. **Brand** — Replace "Brew & Bloom" and the ☕ logo with the real café name
2. **Hero photo** — Swap the Unsplash URL in `index.html` with a photo of the actual café
3. **About photo** — Replace with a photo of the real owner or barista team
4. **Gallery** — Replace the 6 Unsplash URLs with real photos of the space and food
5. **Menu data** — Edit the `menuData` object in `app.js` — name, description, price, and swap each `img` URL for a real dish photo
6. **Contact details** — Update address, phone, email, and hours in `index.html`
7. **Order form backend** — Connect to [Formspree](https://formspree.io) (free tier, 5-min setup) or [EmailJS](https://emailjs.com) to receive orders by email
8. **Google Maps** — Replace the `.map-placeholder` div with a Google Maps `<iframe>` embed
9. **Analytics** — Add a Google Analytics 4 `<script>` snippet before `</head>`
10. **Deploy** — Push to GitHub and enable GitHub Pages for a free live URL

---

## 📦 GitHub Deployment

```bash
git init
git add .
git commit -m "Initial commit: Brew & Bloom café website"
git remote add origin https://github.com/YOUR_USERNAME/brew-and-bloom.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from `main` branch** → live at `https://YOUR_USERNAME.github.io/brew-and-bloom`

---

## 📄 License

MIT — free to adapt for any real client project.
