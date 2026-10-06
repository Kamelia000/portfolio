const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navLinks');
const year = document.getElementById('year');

/* =========================================================
   BASIC SETUP
   ========================================================= */

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================================
   HEADER
   ========================================================= */

if (header) {
  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  };

  updateHeader();

  window.addEventListener('scroll', updateHeader, {
    passive: true
  });
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menuToggle.setAttribute(
      'aria-label',
      isOpen
        ? 'Close navigation'
        : 'Open navigation'
    );
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Open navigation'
      );
    });
  });
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
  document.querySelectorAll('.reveal');

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (
  'IntersectionObserver' in window &&
  !prefersReducedMotion
) {
  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            observer.unobserve(entry.target);
          }

        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

} else {
  revealElements.forEach(element => {
    element.classList.add('visible');
  });
}


/* =========================================================
   SKILL BARS
   ========================================================= */

const skillsSection =
  document.getElementById('skills');

if (
  skillsSection &&
  'IntersectionObserver' in window &&
  !prefersReducedMotion
) {
  const skillsObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            document
              .querySelectorAll('.progress span')
              .forEach((bar, index) => {

                setTimeout(() => {
                  bar.style.width =
                    bar.dataset.width || '0%';
                }, index * 120);

              });

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.2
      }
    );

  skillsObserver.observe(skillsSection);

} else {
  document
    .querySelectorAll('.progress span')
    .forEach(bar => {
      bar.style.width =
        bar.dataset.width || '0%';
    });
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll('section[id]');

if (
  'IntersectionObserver' in window &&
  sections.length
) {
  const activeSectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            navLinks.forEach(link => {

              link.classList.toggle(
                'active',
                link.getAttribute('href') ===
                `#${entry.target.id}`
              );

            });

          }

        });

      },
      {
        threshold: 0.35
      }
    );

  sections.forEach(section => {
    activeSectionObserver.observe(section);
  });
}


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursorGlow =
  document.querySelector('.cursor-glow');

const supportsFinePointer =
  window.matchMedia('(pointer: fine)').matches;

if (
  cursorGlow &&
  supportsFinePointer &&
  !prefersReducedMotion
) {
  let mouseX = 0;
  let mouseY = 0;

  let glowX = 0;
  let glowY = 0;

  window.addEventListener(
    'mousemove',
    event => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    { passive: true }
  );

  const animateGlow = () => {

    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;

    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;

    requestAnimationFrame(animateGlow);
  };

  animateGlow();

} else if (cursorGlow) {
  cursorGlow.style.display = 'none';
}


/* =========================================================
   INTERACTIVE DEVELOPER CARD
   ========================================================= */

const codeCard =
  document.querySelector('.code-card');

const heroVisual =
  document.querySelector('.hero-visual');

if (
  codeCard &&
  heroVisual &&
  supportsFinePointer &&
  !prefersReducedMotion
) {
  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;

  const updateTargetRotation = event => {

    const rect =
      heroVisual.getBoundingClientRect();

    const mouseX =
      (event.clientX - rect.left) / rect.width;

    const mouseY =
      (event.clientY - rect.top) / rect.height;

    targetX = (mouseX - 0.5) * 7;
    targetY = (mouseY - 0.5) * -5;
  };

  heroVisual.addEventListener(
    'mousemove',
    updateTargetRotation,
    { passive: true }
  );

  const animateCard = () => {

    currentX +=
      (targetX - currentX) * 0.08;

    currentY +=
      (targetY - currentY) * 0.08;

    heroVisual.style.setProperty(
      '--mouse-x',
      `${currentX}deg`
    );

    heroVisual.style.setProperty(
      '--mouse-y',
      `${currentY}deg`
    );

    requestAnimationFrame(animateCard);
  };

  animateCard();

  heroVisual.addEventListener(
    'mouseleave',
    () => {
      targetX = 0;
      targetY = 0;
    }
  );
}