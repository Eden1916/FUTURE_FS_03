/* ═══════════════════════════════════════════
   BREW & BLOOM CAFÉ – JavaScript
   No dependencies. No external requests.
   ═══════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════
   MENU DATA
════════════════════════════════ */
const menuData = {
  coffee: [
    {
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Flat white coffee in a ceramic cup',
      name: 'Signature Flat White',
      desc: 'Double ristretto shot, micro-foamed whole milk. Smooth, balanced, and our most-ordered drink.',
      price: '$5.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Cold brew coffee over ice',
      name: 'Cold Brew Float',
      desc: '18-hour cold brew over ice, topped with a scoop of vanilla bean ice cream. A dessert disguised as coffee.',
      price: '$7.00',
      tags: ['v', 'new']
    },
    {
      img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Matcha latte with oat milk in a glass',
      name: 'Matcha Oat Latte',
      desc: 'Ceremonial-grade Japanese matcha whisked with steamed oat milk. Earthy, creamy, caffeine-steady.',
      price: '$6.50',
      tags: ['vg', 'gf']
    },
    {
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Pour-over coffee being brewed',
      name: 'Single Origin Pour-Over',
      desc: 'Rotating single-origin bean, ground fresh and hand-poured. Ask your barista what\'s on the bar today.',
      price: '$6.00',
      tags: ['vg', 'gf']
    }
  ],
  drinks: [
    {
      img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Spiced chai latte in a glass mug',
      name: 'Loose-Leaf Chai',
      desc: 'House-blended masala chai with cardamom, ginger, cinnamon, and your choice of milk.',
      price: '$5.00',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Vibrant pink hibiscus lemonade',
      name: 'Hibiscus Lemonade',
      desc: 'Housemade hibiscus syrup, fresh lemon juice, still or sparkling water. Caffeine-free and vivid.',
      price: '$5.50',
      tags: ['vg', 'gf']
    },
    {
      img: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Rich dark hot chocolate in a white mug',
      name: 'Dark Hot Chocolate',
      desc: '70% Ecuadorian dark chocolate, frothed whole milk, pinch of sea salt. Rich and proper.',
      price: '$5.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Rose steamer with dried petals on top',
      name: 'Rose Steamer',
      desc: 'Rose syrup, steamed milk, dried petals on top. A caffeine-free hug in a cup.',
      price: '$5.00',
      tags: ['v', 'new']
    }
  ],
  pastries: [
    {
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Golden butter croissant on a wooden board',
      name: 'Butter Croissant',
      desc: 'Laminated with French butter, baked until deeply golden. Layers that shatter. Classic done right.',
      price: '$4.00',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Blueberry lemon scone with clotted cream',
      name: 'Blueberry & Lemon Scone',
      desc: 'Wild blueberries, lemon zest, cream scone base. Served warm with clotted cream.',
      price: '$4.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Sliced banana walnut loaf on a plate',
      name: 'Banana Walnut Loaf',
      desc: 'Dense, moist, not too sweet. Toasted walnuts, overripe banana, brown butter glaze.',
      price: '$4.50',
      tags: ['v', 'gf']
    },
    {
      img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Brown butter cookie with sea salt flakes',
      name: 'Brown Butter Cookie',
      desc: 'Crispy edges, chewy centre, flaked sea salt on top. Baked in small batches every morning.',
      price: '$3.50',
      tags: ['v']
    }
  ],
  brunch: [
    {
      img: 'https://images.unsplash.com/photo-1482012792084-a0c3725f289f?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Smashed avocado toast on sourdough',
      name: 'Smashed Avocado Toast',
      desc: 'Sourdough, smashed avo, chilli flakes, lemon, dukkah. Add a poached egg for $2.',
      price: '$13.00',
      tags: ['vg']
    },
    {
      img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Poached eggs on toast with roasted tomatoes',
      name: 'Eggs Your Way',
      desc: 'Two free-range eggs (scrambled, poached, or fried) on sourdough with roasted tomato and sautéed spinach.',
      price: '$12.00',
      tags: ['v', 'gf']
    },
    {
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Stack of fluffy ricotta hotcakes with berries',
      name: 'Ricotta Hotcakes',
      desc: 'Fluffy ricotta pancakes with seasonal compote, whipped cream, and maple syrup.',
      price: '$15.00',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Colourful grain bowl with quinoa and vegetables',
      name: 'Grain Bowl',
      desc: 'Quinoa, roasted sweet potato, kale, pickled red onion, tahini dressing, toasted seeds.',
      price: '$16.00',
      tags: ['vg', 'gf', 'new']
    }
  ]
};

/* ════════════════════════════════
   TESTIMONIALS DATA
════════════════════════════════ */
const testimonials = [
  {
    stars: '★★★★★',
    quote: 'I\'ve been coming here every weekday for two years. The flat white is genuinely the best in the city, and the staff remember my name and order. That matters.',
    name: 'Aisha M.',
    info: 'Regular · Google Review',
    emoji: '👩'
  },
  {
    stars: '★★★★★',
    quote: 'Popped in on a Saturday morning and ended up staying three hours. The ricotta hotcakes, the matcha latte, the playlist — everything was just right. Already planning my next visit.',
    name: 'Tom & Carla B.',
    info: 'Weekend Visitors · TripAdvisor',
    emoji: '👫'
  },
  {
    stars: '★★★★★',
    quote: 'As someone who works from cafés, Brew & Bloom is the gold standard. Fast Wi-Fi, great power outlets, staff who don\'t rush you, and coffee that actually keeps you going.',
    name: 'Rajan P.',
    info: 'Freelancer & Regular · Yelp',
    emoji: '👨‍💻'
  },
  {
    stars: '★★★★★',
    quote: 'The banana walnut loaf alone is worth the trip. I ordered one for a friend\'s birthday after they mentioned it in passing and they were absolutely floored.',
    name: 'Sophie L.',
    info: 'Local · Google Review',
    emoji: '👩‍🦰'
  }
];

/* ── TAG DEFINITIONS ── */
const tagMap = {
  v:   { label: 'Vegetarian', cls: 'tag-v'  },
  vg:  { label: 'Vegan',      cls: 'tag-vg' },
  gf:  { label: 'GF',         cls: 'tag-gf' },
  s:   { label: 'Spicy',      cls: 'tag-s'  },
  new: { label: 'New',        cls: 'tag-new' }
};

/* ════════════════════════════════
   NAVBAR – scroll
════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ════════════════════════════════
   HAMBURGER
════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ════════════════════════════════
   MENU TABS
════════════════════════════════ */
const menuGrid = document.getElementById('menuGrid');

function renderMenu(tab) {
  const items = menuData[tab] || [];
  menuGrid.innerHTML = items.map((item, i) => {
    const tagsHtml = item.tags.map(t =>
      `<span class="menu-tag ${tagMap[t].cls}">${tagMap[t].label}</span>`
    ).join('');
    return `
      <div class="menu-card" style="animation-delay:${i * 55}ms">
        <img class="menu-img" src="${item.img}" alt="${item.alt}" loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=120&auto=format&fit=crop&q=80'" />
        <div class="menu-card-body">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <span class="menu-price">${item.price}</span>${tagsHtml}
        </div>
      </div>`;
  }).join('');
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});

renderMenu('coffee');

/* ════════════════════════════════
   TESTIMONIAL CAROUSEL
════════════════════════════════ */
const carousel = document.getElementById('testimonialCarousel');
const dotsWrap = document.getElementById('carouselDots');
let current = 0;
let timer;

function buildCarousel() {
  carousel.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-slide ${i === 0 ? 'active' : ''}">
      <div class="testimonial-card">
        <div class="stars">${t.stars}</div>
        <blockquote>"${t.quote}"</blockquote>
        <div class="reviewer">
          <div class="reviewer-avatar">${t.emoji}</div>
          <div class="reviewer-info">
            <strong>${t.name}</strong>
            <span>${t.info}</span>
          </div>
        </div>
      </div>
    </div>`
  ).join('');

  dotsWrap.innerHTML = testimonials.map((_, i) =>
    `<button class="dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Review ${i + 1}"></button>`
  ).join('');

  dotsWrap.querySelectorAll('.dot').forEach(d => {
    d.addEventListener('click', () => goTo(Number(d.dataset.i)));
  });
}

function goTo(n) {
  const slides = carousel.querySelectorAll('.testimonial-slide');
  const dots   = dotsWrap.querySelectorAll('.dot');
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + testimonials.length) % testimonials.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAuto() { timer = setInterval(() => goTo(current + 1), 5000); }

buildCarousel();
startAuto();
carousel.addEventListener('mouseenter', () => clearInterval(timer));
carousel.addEventListener('mouseleave', startAuto);

/* ════════════════════════════════
   ORDER FORM
════════════════════════════════ */
const orderForm    = document.getElementById('orderForm');
const formSuccess  = document.getElementById('formSuccess');

orderForm.addEventListener('submit', e => {
  e.preventDefault();
  const required = orderForm.querySelectorAll('[required]');
  let valid = true;

  required.forEach(f => {
    f.style.borderColor = '';
    if (!f.value.trim()) {
      f.style.borderColor = '#ef5350';
      valid = false;
    }
  });

  if (!valid) { required[0].focus(); return; }

  const btn = orderForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    orderForm.reset();
    btn.textContent = 'Place Order';
    btn.disabled = false;
    setTimeout(() => { formSuccess.hidden = true; }, 7000);
  }, 1200);
});

/* ════════════════════════════════
   SCROLL REVEAL
════════════════════════════════ */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

setTimeout(() => {
  document.querySelectorAll(
    '.highlight, .about-text > *, .about-image-wrap, .contact-card, .g-item, .step, .footer-inner > *'
  ).forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}, 120);

/* ════════════════════════════════
   SCROLL SPY (active nav link)
════════════════════════════════ */
const spyObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      document.querySelectorAll('.nav-links a:not(.btn-nav)').forEach(a => {
        a.classList.toggle('active-nav', a.getAttribute('href') === `#${id}`);
      });
    }
  }),
  { threshold: 0.3 }
);

document.querySelectorAll('section[id]').forEach(s => spyObs.observe(s));

/* Inject active nav style */
const st = document.createElement('style');
st.textContent = `.nav-links a.active-nav:not(.btn-nav){color:var(--caramel-lt)}.nav-links a.active-nav:not(.btn-nav)::after{width:100%}`;
document.head.appendChild(st);
