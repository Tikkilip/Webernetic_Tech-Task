const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("girl-rotation-animation");
    }
  });
});

observer1.observe(document.querySelector(".project__image"));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("microphone-rotation-animation");
    }
  });
});

observer2.observe(document.querySelector(".ads__microphone-image"));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("history__title-circle-animation");
    }
  });
});

observer3.observe(document.querySelector(".history__title-circle"));

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("history__contents-circle-animation");
    }
  });
});

observer4.observe(document.querySelector(".history__contents-circle"));

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-1-animation");
    }
  });
});

observer5.observe(document.querySelector(".ads__image-1"));

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-2-animation");
    }
  });
});

observer6.observe(document.querySelector(".ads__image-2"));

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-3-animation");
    }
  });
});

observer7.observe(document.querySelector(".ads__image-3"));

const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-4-animation");
    }
  });
});

observer8.observe(document.querySelector(".ads__image-4"));

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-5-animation");
    }
  });
});

observer9.observe(document.querySelector(".ads__image-5"));

const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-6-animation");
    }
  });
});

observer10.observe(document.querySelector(".ads__image-6"));

const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ads__image-7-animation");
    }
  });
});

observer11.observe(document.querySelector(".ads__image-7"));

const observer12 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("results__item-1-animation");
    }
  });
});

observer12.observe(document.querySelector(".results__item-1"));

const observer13 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("results__item-2-animation");
    }
  });
});

observer13.observe(document.querySelector(".results__item-2"));

const observer14 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("results__item-3-animation");
    }
  });
});

observer14.observe(document.querySelector(".results__item-3"));

const observer15 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("results__item-4-animation");
    }
  });
});

observer15.observe(document.querySelector(".results__item-4"));

const observer16 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("development__yellow-circle-animation");
    }
  });
});

observer16.observe(document.querySelector(".development__yellow-circle"));

const observer17 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("development__purple-circle-animation");
    }
  });
});

observer17.observe(document.querySelector(".development__purple-circle"));

const observer18 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("microphone-rotation-animation");
    }
  });
});

observer18.observe(document.querySelector(".ads__microphone-image-mobile"));
