document
  .querySelector(".ri-menu-3-line")
  .addEventListener("click", function () {
    document.querySelector(".nav-phone").style.left = "0%";
  });

document
  .querySelector(".ri-close-large-line")
  .addEventListener("click", function () {
    document.querySelector(".nav-phone").style.left = "100%";
  });

document.addEventListener("mousemove", function (details) {
  document.querySelectorAll(".glass-elem").forEach((elem) => {
    const position = elem.getAttribute("value");
    var x = (window.innerWidth - details.clientX * position) / 50;
    var y = (window.innerHeight - details.clientY * position) / 50;

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// -------------Scroll Animation----------

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".topper-section",
    pin: true,
    start: "50% 50%",
    end: "150% 50%",
    scrub: 2,
  },
});

tl.to(
  ".img-t-elem-1",
  {
    width: "10vw",
    height: "10vw",
    left: "10%",
    top: "10%",
  },
  "s"
);

tl.to(
  ".img-t-elem-2",
  {
    width: "10vw",
    height: "10vw",
    left: "70%",
    top: "20%",
  },
  "s"
);
tl.to(
  ".img-t-elem-3",
  {
    width: "10vw",
    height: "10vw",
    left: "20%",
    top: "30%",
  },
  "s"
);
tl.to(
  ".img-t-elem-4",
  {
    width: "10vw",
    height: "10vw",
    left: "50%",
    top: "0%",
  },
  "s"
);
tl.to(
  ".img-t-elem-5",
  {
    width: "10vw",
    height: "10vw",
    left: "50%",
    top: "70%",
  },
  "s"
);
tl.to(
  ".img-t-elem-6",
  {
    width: "10vw",
    height: "10vw",
    left: "75%",
    top: "60%",
  },
  "s"
);
tl.to(
  ".text-topper",
  {
    opacity: 1,
    scale: 1.1,
    delay: 0.2,
  },
  "s"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".event-section",
    // markers:true,
    start: "50% 50%",
    end: "150% 50%",
    scrub: 2,
    pin: true,
  },
});
tl2
  .to(
    "#card-one",
    {
      top: "60%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "150%",
    },
    "a"
  )
  .to(
    ".lft-event h3",
    {
      fontSize: "1.5vw",
    },
    "b"
  )
  .to(
    "#card-two",
    {
      top: "70%",
    },
    "b"
  )
  .to(
    "#card-one",
    {
      width: "65%",
      height: "65vh",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "130%",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "80%",
    },
    "c"
  )
  .to(
    "#card-two",
    {
      width: "70%",
      height: "70vh",
    },
    "c"
  );

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const header = document.querySelector("header");
// Set the initial scroll position
let lastScrollPosition = 0;
// // Add an event listener for the scroll event
window.addEventListener("scroll", () => {
  // Get the current scroll position
  let currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition - lastScrollPosition > 0) {
    // If the scroll direction is down and the user has scrolled past the navbar, hide the navbar
    header.classList.add("hide");
  } else {
    // If the scroll direction is up or the user is at the top of the page, show the navbar
    header.classList.remove("hide");
  }
  // Set the last scroll position to the current scroll position
  lastScrollPosition = currentScrollPosition;
});
