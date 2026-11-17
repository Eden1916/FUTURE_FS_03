# ☕ Dembel – Ethiopian Coffee House & Kitchen

> **A live pitch project** · HTML / CSS / JavaScript · Zero dependencies · Fully responsive · Real photography throughout

---

## 🚀 Live Demo

Open `index.html` in any browser — no server, no build step required.

---

## 📁 Project Structure

```
LBW/
├── index.html   – Full single-page website (semantic HTML5, custom SVG logo)
├── style.css    – All styles (Ethiopian-inspired warm earth palette)
├── app.js       – Menu tabs, carousel, form validation, scroll spy, reveal
└── README.md    – This file + pitch explanation
```

---

## ✨ Features Built

| Feature | Detail |
|---|---|
| **Custom SVG logo** | Hand-coded jebena (Ethiopian coffee pot) logo in SVG — no image file needed |
| **Sticky navbar** | Transparent on load → dark glass on scroll, active link highlighting via scroll spy |
| **Hero section** | Full-screen real coffee photo with dark overlay, animated headline, two CTAs |
| **Highlights bar** | Awards, origin story, in-house roasting, and star rating trust signals |
| **About section** | Founder story (Selam Tadesse, Addis Ababa → your city), real photo, badge card |
| **Interactive menu** | 4 tabs × 4 items each — authentic Ethiopian dishes with real food photos |
| **Coffee ceremony section** | Dedicated section explaining the three rounds: Abol, Huletegna, Bereka |
| **Menu image fallback** | `onerror` handler ensures layout never breaks if a URL fails |
| **Photo gallery** | 6-slot CSS Grid masonry with real photos, hover zoom effect |
| **Testimonial carousel** | Auto-advancing with dot navigation, pauses on hover |
| **Online order form** | Full validation, loading state, success confirmation, ceremony booking info |
| **Contact section** | Address, hours, phone, email, socials |
| **Scroll reveal** | IntersectionObserver-powered fade-in animations |
| **Mobile-first** | Hamburger menu, stacked layouts, touch-friendly at all breakpoints |

---

## 🇪🇹 Authentic Ethiopian Content

### Menu Categories

**Buna (Coffee)** — Traditional Ethiopian coffee
| Item | Description |
|---|---|
| Jebena Buna | Clay pot brewed, three rounds, frankincense |
| Buna Macchiato | Yirgacheffe double shot with steamed milk |
| Cold Buna | 18-hour cold brew from Sidamo beans |
| Yirgacheffe Pour-Over | Hand-poured, jasmine & bergamot notes |

**Tea & Drinks**
| Item | Description |
|---|---|
| Wotet Chat | Spiced black tea with milk, cardamom, cinnamon |
| Tena Adam Tea | Caffeine-free herbal infusion with honey & lime |
| Suf (Hibiscus) Ade | Fresh hibiscus drink with ginger & honey |
| Buna Bati | Espresso, dark chocolate, berberé spice |

**Ethiopian Kitchen**
| Item | Description |
|---|---|
| Doro Wat | National dish: chicken in berberé, slow-cooked 4 hrs |
| Tibs (Beef) | Sautéed beef with jalapeño, rosemary, niter kibbeh |
| Yetsom Beyaynetu | Fasting platter: 5 vegetarian dishes on injera |
| Misir Wat | Red lentils in berberé sauce |

**Snacks & Sweets**
| Item | Description |
|---|---|
| Sambusa | Crispy spiced pastry triangles (lentil or beef) |
| Dabo Kolo | Crunchy roasted bread snacks |
| Yemar Yekwoteta | Traditional Ethiopian honey cake |
| Fendisha | Popcorn — the traditional coffee companion |

### Coffee Ceremony Section

A dedicated section explaining the Ethiopian coffee ceremony and its three rounds:

1. **Abol** — The first pour, strongest and most flavourful
2. **Huletegna** — The second pour, smoother and mellow
3. **Bereka** — The third pour, a blessing to close

### Real Images Used

All photos are free-to-use from [Unsplash](https://unsplash.com), loaded directly by URL.

| Location | Subject |
|---|---|
| Hero background | Coffee being poured in a traditional setting |
| About section | Coffee beans being freshly roasted |
| Ceremony section | Traditional coffee being prepared |
| Gallery (6 photos) | Café interior, buna service, fresh roast, terrace, platter, roasting bar |
| Menu cards (16 photos) | Each dish has its own real food/drink photo |

---

## 🎯 Pitch Explanation – How This Website Grows the Business

### The Problem

Ethiopian restaurants and cafés often rely on word-of-mouth within the diaspora community. A Google search for "Ethiopian coffee near me" frequently returns nothing — not because the businesses don't exist, but because they have no web presence. A café serving the birthplace of coffee deserves a website that tells that story.

### What This Website Solves

**1. Cultural storytelling as a competitive advantage**
The coffee ceremony section doesn't just list a product — it explains a 1,000-year-old tradition. That's content no chain café can replicate. Visitors who discover the ceremony through the website become experiential customers, not just transactional ones.

**2. Online orders captured directly — no commission fees**
Delivery platforms (UberEats, Deliveroo) charge 15–30% per order. This built-in pickup order form sends orders directly to the owner, preserving margin on every plate of doro wat and every cup of buna.

**3. Menu education drives higher spend**
Ethiopian food has unfamiliar names (doro wat, yetsom beyaynetu, misir wat). The menu descriptions with photos mean customers arrive knowing what they want — and what they want to try. That's upsell without any staff effort.

**4. Trust signals for a niche cuisine**
The "Best Café 2024" badge, 4.9-star rating, and authentic testimonials (including from Ethiopian customers) all signal: this isn't a watered-down interpretation. It's the real thing.

**5. Mobile-first by design**
Over 65% of local business searches happen on phones. Every layout, button size, and image breakpoint was designed mobile-first.

**6. SEO-ready structure**
Semantic HTML, descriptive meta tags, and a meaningful title give search engines everything needed to index and rank the page for "Ethiopian coffee" and "Ethiopian restaurant" searches.

### Business Metrics This Website Can Directly Affect

| Metric | How |
|---|---|
| **New customer acquisition** | Google indexes the site; cultural-cuisine searches convert to visits |
| **Average order value** | Menu photos and descriptions encourage multi-item orders |
| **Ceremony bookings** | Dedicated section drives weekend ceremony reservations |
| **Repeat visits** | Social links build an ongoing audience and community |
| **Commission savings** | Direct pickup orders bypass third-party delivery fees |
| **Cultural credibility** | Authentic content signals to diaspora community that this is genuine |

---

## 🛠️ Tech Stack

| Layer | Detail |
|---|---|
| **HTML5** | Semantic markup, accessible labels, `aria` attributes, inline SVG logo |
| **CSS3** | Custom properties, CSS Grid, Flexbox, `clamp()`, `aspect-ratio`, `object-fit` |
| **JavaScript (ES6+)** | Vanilla JS — no frameworks, no build tools, no `node_modules` |
| **Fonts** | System font stack only (`Georgia`, `system-ui`) — zero external requests |
| **Images** | Unsplash direct URLs with `onerror` fallback on every menu image |
| **Logo** | Inline SVG jebena (Ethiopian coffee pot) — no image file needed |


---

## 📦 GitHub Deployment

```bash
git init
git add .
git commit -m "Initial commit: Dembel Ethiopian Coffee House website"
git remote add origin https://github.com/Eden1916/FUTURE_FS_03.git
git push -u origin main
```

Then: **Settings → Pages → Deploy from `main` branch** → live at `https://github.com/Eden1916/FUTURE_FS_03.git`

---

## 📄 License

MIT — free to adapt for any real client project.
