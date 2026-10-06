const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navLinks');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-label',
    navMenu.classList.contains('open')
      ? 'Close navigation'
      : 'Open navigation'
  );
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});


const revealObserver = new IntersectionObserver(
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

document.querySelectorAll('.reveal').forEach(element => {
  revealObserver.observe(element);
});


const skillsSection = document.getElementById('skills');

const skillsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        document
          .querySelectorAll('.progress span')
          .forEach((bar, index) => {

            setTimeout(() => {
              bar.style.width = bar.dataset.width;
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


const sections = document.querySelectorAll('section[id]');

const activeSectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
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


const cursorGlow = document.querySelector('.cursor-glow');

if (window.matchMedia('(pointer: fine)').matches) {

  window.addEventListener('mousemove', event => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

  });

} else {

  cursorGlow.style.display = 'none';

}


const codeCard = document.querySelector('.code-card');

if (window.matchMedia('(pointer: fine)').matches) {

  document.addEventListener('mousemove', event => {

    const x =
      (event.clientX / window.innerWidth - 0.5) * 8;

    const y =
      (event.clientY / window.innerHeight - 0.5) * -5;

    codeCard.style.transform =
      `perspective(1000px)
       rotateY(${x - 4}deg)
       rotateX(${y + 2}deg)`;

  });

}