function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  let count = 0;
  const duration = 2000; // Animation duration in milliseconds
  const step = target / (duration / 16); // 60 FPS

  function updateCount() {
    count += step;
    if (count < target) {
      element.textContent = Math.floor(count) + '+';
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target + '+';
    }
  }

  updateCount();
}

const counterSection = document.querySelector('.counter');
const counterElements = document.querySelectorAll('.counter_card h2');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counterElements.forEach(element => {
        animateCounter(element);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(counterSection);

// Animate on page load/refresh
window.addEventListener('load', () => {
  counterElements.forEach(element => {
    animateCounter(element);
  });
});



// PORTFOLIO SWIPER SLIDER

var swiper = new Swiper(".portfolioSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});



// FAQS SECTION

let Quest = document.querySelectorAll('.question');
let para = document.querySelectorAll('.faq-para');
let QnsHead = document.querySelectorAll('.qns_icon');

Quest.forEach((drop, index) => {
  drop.addEventListener('click', () => {
    para.forEach(paragraph => {
      paragraph.classList.remove('showQuestion');
    });
    QnsHead.forEach(icon => {
      icon.classList.remove('active_ans');
    });

    const answer = drop.lastElementChild;
    answer.classList.toggle('showQuestion');
    QnsHead[index].classList.toggle('active_ans');
  });
});


// TESTIMONIAL SWIPER SLIDER

var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});


//  BRANDS SLIDER

var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

});


// BLOG SLIDER

var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

});

// MENU TOGGLE

let bar = document.querySelector(".bars");
let menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show_menu");
});
