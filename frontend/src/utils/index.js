export const addRipple = (e) => {
  const targetPositionX = e.currentTarget.offsetLeft;
  const targetPositionY = e.currentTarget.offsetTop;

  const rippleSpan = document.createElement("span");
  rippleSpan.setAttribute("class", "ripple-child");

  let size = e.currentTarget.offsetHeight;
  if (e.currentTarget.offsetHeight < e.currentTarget.offsetWidth) {
    size = e.currentTarget.offsetWidth;
  }

  rippleSpan.style.width = `${size}px`;
  rippleSpan.style.height = `${size}px`;

  const positionX = e.pageX - targetPositionX - size / 2;
  const positionY = e.pageY - targetPositionY - size / 2;

  rippleSpan.style.top = `${positionY}px`;
  rippleSpan.style.left = `${positionX}px`;

  e.currentTarget.appendChild(rippleSpan);

  e.currentTarget.addEventListener("animationend", (e) => {
    if (e.currentTarget.lastElementChild === rippleSpan) {
      e.currentTarget.removeChild(rippleSpan);
    }
  });
};
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
