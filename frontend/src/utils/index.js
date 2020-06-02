export const addObservable = (elements) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("entry");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.75 }
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
          const targetPositionX = element.offsetLeft;
          const targetPositionY = element.offsetTop;

          const rippleSpan = document.createElement("span");
          rippleSpan.setAttribute("class", "ripple-child");

          let size = element.offsetHeight;
          if (element.offsetHeight < element.offsetWidth) {
            size = element.offsetWidth;
          }

          rippleSpan.style.width = `${size}px`;
          rippleSpan.style.height = `${size}px`;

          const positionX = e.pageX - targetPositionX - size / 2;
          const positionY = e.pageY - targetPositionY - size / 2;

          rippleSpan.style.top = `${positionY}px`;
          rippleSpan.style.left = `${positionX}px`;

          element.appendChild(rippleSpan);

          element.addEventListener("animationend", (e) => {
            if (element.lastElementChild === rippleSpan) {
              // element.removeChild(rippleSpan);
            }
          });
        });
      });
    }
  }, 100);
};
