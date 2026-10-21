// CV Wahida - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initActiveNavLink();
  initSkillFilter();
  initCounters();
  initContactForm();
  initPrintBtn();
  initGalleryFilter();
  initLightbox();
});

/* ---------------------------------------------
   1. Theme Toggle (Dark / Light Mode)
--------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('wahida_theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('wahida_theme', newTheme);
      updateThemeIcon(newTheme, themeIcon);
    });
  }
}

function updateThemeIcon(theme, iconElem) {
  if (!iconElem) return;
  if (theme === 'dark') {
    iconElem.className = 'fas fa-sun';
  } else {
    iconElem.className = 'fas fa-moon';
  }
}

/* ---------------------------------------------
   2. Mobile Menu Navigation
--------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburger.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (hamburger.querySelector('i')) {
          hamburger.querySelector('i').className = 'fas fa-bars';
        }
      });
    });
  }
}

/* ---------------------------------------------
   3. Active Nav Link on Scroll
--------------------------------------------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length <= 1) return;

  function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
}

/* ---------------------------------------------
   4. Filterable Skills Tabs
--------------------------------------------- */
function initSkillFilter() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!tabBtns.length || !skillCards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---------------------------------------------
   5. Animated Counter Stats
--------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 35;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count) + suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + suffix;
        }
      };

      updateCount();
    });
  }

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          runCounters();
          animated = true;
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }
}

/* ---------------------------------------------
   6. Contact Form & WhatsApp Integration
--------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Harap lengkapi semua kolom wajib!', true);
      return;
    }

    // Nomor WhatsApp Wahida (placeholder, dapat diganti di index.html atau di sini)
    const waNumber = '6281234567890'; // ganti dengan nomor aktif jika ada
    const encodedText = encodeURIComponent(
      `Halo Ibu Wahida, saya ${name} (${email}).\nPerihal: ${subject || 'Pertanyaan/Peluang Kerja'}\n\nPesan:\n${message}`
    );

    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

    showToast('Terima kasih! Mengarahkan ke WhatsApp...', false);

    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 1200);
  });
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.style.background = isError ? '#ef4444' : '#10b981';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ---------------------------------------------
   7. Cetak / Download CV Function
--------------------------------------------- */
function initPrintBtn() {
  const printBtns = document.querySelectorAll('.btn-print-cv');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}

/* ---------------------------------------------
   8. Filter Kategori Galeri Kegiatan
--------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-tab-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!filterBtns.length || !galleryCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---------------------------------------------
   9. Lightbox Modal Foto Galeri
--------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const closeBtn = document.getElementById('lightboxClose');
  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalDesc = document.getElementById('lightboxDesc');
  const modalDate = document.getElementById('lightboxDate');
  const modalBadge = document.getElementById('lightboxBadge');
  const galleryCards = document.querySelectorAll('.gallery-card');

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgElem = card.querySelector('.gallery-thumb img');
      const titleElem = card.querySelector('.gallery-title');
      const descElem = card.querySelector('.gallery-desc');
      const dateElem = card.querySelector('.gallery-meta span');
      const badgeElem = card.querySelector('.gallery-badge');

      if (modalImg && imgElem) {
        modalImg.src = imgElem.src;
        modalImg.alt = imgElem.alt || 'Foto Kegiatan';
      }

      if (modalTitle && titleElem) modalTitle.textContent = titleElem.textContent;
      if (modalDesc && descElem) modalDesc.textContent = descElem.textContent;
      if (modalDate && dateElem) modalDate.textContent = dateElem.textContent;
      if (modalBadge && badgeElem) modalBadge.textContent = badgeElem.textContent;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // cegah background scrolling
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Klik di luar konten modal untuk menutup
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Tombol Escape di keyboard untuk menutup
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
