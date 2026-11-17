/* ═══════════════════════════════════════════
   DEMBEL – Ethiopian Coffee House
   JavaScript · No dependencies
   ═══════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════
   MENU DATA — Authentic Ethiopian
════════════════════════════════ */
const menuData = {
  buna: [
    {
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Traditional Ethiopian jebena coffee in a cup',
      name: 'Jebena Buna',
      desc: 'Coffee brewed in a clay jebena pot, served in small cups with frankincense. The traditional way — three rounds included.',
      price: '£6.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Macchiato in a small glass cup',
      name: 'Buna Macchiato',
      desc: 'Double shot of our house-roasted Yirgacheffe, lightly marked with steamed milk. Strong, bright, floral.',
      price: '£4.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Iced coffee in a glass',
      name: 'Cold Buna',
      desc: 'Our Sidamo beans brewed cold for 18 hours, served over ice. Smooth, low-acid, and naturally sweet.',
      price: '£5.50',
      tags: ['v', 'vg', 'new']
    },
    {
      img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Freshly roasted coffee beans',
      name: 'Yirgacheffe Pour-Over',
      desc: 'Hand-poured single-origin from the Yirgacheffe region. Notes of jasmine, lemon, and bergamot. Light roast.',
      price: '£5.00',
      tags: ['v', 'vg']
    }
  ],
  drinks: [
    {
      img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Spiced tea in a glass',
      name: 'Wotet Chat',
      desc: 'Ethiopian spiced black tea with milk, cardamom, and cinnamon. Comforting and warming.',
      price: '£3.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Herbal tea with honey',
      name: 'Tena Adam Tea',
      desc: 'Caffeine-free herbal infusion with Ethiopian tena adam leaves, honey, and a squeeze of lime.',
      price: '£4.00',
      tags: ['vg']
    },
    {
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Pink fruit drink in a glass',
      name: 'Suf (Hibiscus) Ade',
      desc: 'Fresh hibiscus flower drink with ginger, lime, and a touch of honey. Vivid, tart, and refreshing.',
      price: '£4.50',
      tags: ['vg', 'new']
    },
    {
      img: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Hot chocolate in a mug',
      name: 'Buna Bati',
      desc: 'A coffee house special: espresso, dark chocolate, steamed milk, and a pinch of berberé spice. Unexpected.',
      price: '£5.00',
      tags: ['v']
    }
  ],
  food: [
    {
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Ethiopian platter on injera',
      name: 'Doro Wat',
      desc: 'Ethiopia\'s national dish: chicken simmered in berberé sauce, hard-boiled egg, served on injera. Slow-cooked for 4 hours.',
      price: '£14.50',
      tags: ['gf', 's']
    },
    {
      img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Beef tibs on a plate',
      name: 'Tibs (Beef)',
      desc: 'Sautéed beef cubes with onions, jalapeño, rosemary, and niter kibbeh (spiced butter). Served on injera.',
      price: '£13.00',
      tags: ['gf', 's']
    },
    {
      img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Colourful vegetable platter on injera',
      name: 'Yetsom Beyaynetu',
      desc: 'Fasting platter: misir wat (red lentils), atakelt wat (cabbage), gomen (collard greens), shiro, and salad on injera.',
      price: '£12.50',
      tags: ['vg', 'gf']
    },
    {
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Lentils and chickpeas on a plate',
      name: 'Misir Wat',
      desc: 'Red lentils cooked in berberé sauce, garlic, and ginger. Mildly spiced, deeply satisfying. Served on injera.',
      price: '£10.00',
      tags: ['vg', 'gf']
    }
  ],
  snacks: [
    {
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Golden fried pastry triangles',
      name: 'Sambusa',
      desc: 'Crispy pastry triangles filled with spiced lentils or beef. Three per portion with berberé dipping sauce.',
      price: '£5.50',
      tags: ['s']
    },
    {
      img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Dabo bread slices on a plate',
      name: 'Dabo Kolo',
      desc: 'Crunchy bite-sized roasted bread snacks, lightly sweetened. A classic Ethiopian tea companion.',
      price: '£3.50',
      tags: ['v', 'vg']
    },
    {
      img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Honey cake on a plate',
      name: 'Yemar Yekwoteta',
      desc: 'Traditional Ethiopian honey cake, made with berebere spice and local honey. Dense, rich, not too sweet.',
      price: '£4.50',
      tags: ['v']
    },
    {
      img: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=120&h=120&auto=format&fit=crop&q=80',
      alt: 'Popcorn in a bowl',
      name: 'Fendisha',
      desc: 'Freshly popped popcorn served alongside buna, the traditional coffee ceremony companion. Salty, never sweet.',
      price: '£2.50',
      tags: ['v', 'vg', 'gf', 'new']
    }
  ]
};

/* ════════════════════════════════
   TESTIMONIALS DATA
════════════════════════════════ */
const testimonials = [
  {
    stars: '★★★★★',
    quote: 'The coffee ceremony here is something else. They roast the beans in front of you, burn frankincense, pour three rounds from a clay jebena. It\'s not a café visit — it\'s an experience. I brought my parents and they haven\'t stopped talking about it.',
    name: 'Mahlet G.',
    info: 'Regular · Google Review',
    emoji: '👩'
  },
  {
    stars: '★★★★★',
    quote: 'I\'m Ethiopian and I was sceptical about a café serving "authentic" buna in this city. But the doro wat tastes like my mother\'s, the injera is proper teff, and the buna is genuinely brewed in a jebena. This is the real thing.',
    name: 'Dawit A.',
    info: 'Local · Google Review',
    emoji: '👨'
  },
  {
    stars: '★★★★★',
    quote: 'I came for the coffee and stayed for the food. The yetsom beyaynetu platter was a revelation — five different dishes on one giant injera, each one more flavourful than the last. Already planning to bring the whole office.',
    name: 'Helen T.',
    info: 'First-time visitor · TripAdvisor',
    emoji: '👩‍🦰'
  },
  {
    stars: '★★★★★',
    quote: 'Cosy space, incredible aroma the moment you walk in, and staff who genuinely want to share their culture. The Yirgacheffe pour-over was the best cup of coffee I\'ve had this year — bright, floral, alive.',
    name: 'James W.',
    info: 'Coffee enthusiast · Yelp',
    emoji: '👨‍💻'
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

renderMenu('buna');

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
    '.highlight, .about-text > *, .about-image-wrap, .contact-card, .g-item, .step, .footer-inner > *, .round-card, .ceremony-image-wrap, .ceremony-text > *'
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
st.textContent = `.nav-links a.active-nav:not(.btn-nav){color:var(--gold-lt)}.nav-links a.active-nav:not(.btn-nav)::after{width:100%}`;
document.head.appendChild(st);
