// ============================================
// ACADEMIC PORTFOLIO — JS
// ============================================

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
});

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Active nav link on scroll ---
function updateActiveLink() {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}

// --- Research filter ---
const researchFilter = document.getElementById('researchFilter');
const researchCards = document.querySelectorAll('#researchGrid .research-card');
if (researchFilter) {
  researchFilter.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    researchFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    researchCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
}

// --- Publications filter ---
const pubFilter = document.getElementById('pubFilter');
const pubCards = document.querySelectorAll('#pubList .pub-card');
if (pubFilter) {
  pubFilter.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    pubFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    pubCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
}

// --- Key Takeaways toggle ---
function toggleTakeaway(btn) {
  const card = btn.closest('.pub-main');
  const takeaway = card.querySelector('.pub-takeaway');
  if (!takeaway) return;
  takeaway.classList.toggle('hidden');
  btn.textContent = takeaway.classList.contains('hidden') ? 'Key Takeaways' : 'Hide Takeaways';
}

// --- Copy Citation ---
const citations = {
  pub1: `@article{yourname2025perovskites,
  title={Charge Carrier Transport in Two-Dimensional Benzimidazole-Based Perovskites},
  author={Wang, L. and Your Name, M. and Hao, W. and others},
  journal={Mater. Horiz.},
  volume={12},
  pages={6812},
  year={2025},
  publisher={RSC}
}`,
  pub2: `@article{yourname2025mofs,
  title={Introducing Metal-Sulfur Active Sites in Metal-Organic Frameworks via Post-Synthetic Modification for Hydrogenation Catalysis},
  author={Your Name, M. and Coauthor, A. and others},
  journal={Nat. Chem.},
  volume={17},
  pages={1514},
  year={2025},
  publisher={Nature Publishing Group}
}`
};

function copyBibTeX(btn, pubId) {
  const text = citations[pubId] || 'Citation not available';
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.background = 'var(--teal)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--teal)';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
}

// --- Intersection Observer for animations ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .research-card, .pub-card, .blog-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
