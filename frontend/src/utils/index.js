export const addObservable = (elements) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("entry");
          observer.unobserve(entry.target);
        }
      });
    }
    // { root: null, rootMargin: "0px", threshold: 0.75 }
  );
  elements.forEach((element) => observer.observe(element));
};

export const addRipple = () => {
  const interval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(interval);

      const ripples = document.querySelectorAll(".ripple");

      ripples.forEach((element) => {
        element.addEventListener("click", (e) => {
          let size = element.offsetHeight;
          if (element.offsetHeight < element.offsetWidth) {
            size = element.offsetWidth;
          }

          element.style.setProperty("--width", `${size}px`);
          element.style.setProperty("--height", `${size}px`);

          const positionX =
            e.clientX - e.currentTarget.getBoundingClientRect().left - size / 2;
          const positionY =
            e.clientY - e.currentTarget.getBoundingClientRect().top - size / 2;

          element.style.setProperty("--top", `${positionY}px`);
          element.style.setProperty("--left", `${positionX}px`);

          element.classList.add("wave");

          element.addEventListener("animationend", (e) => {
            element.classList.remove("wave");
          });
        });
      });
    }
  }, 100);
};

export const moveSideMenu = () => {
  const header = document.querySelector(".header");
  const sideMenu = document.querySelector(".side-menu");
  const observer = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sideMenu.classList.remove("up");
      } else {
        sideMenu.classList.add("up");
      }
    })
  );
  observer.observe(header);
};
