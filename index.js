// DOM
const defData = Array.from(document.getElementsByTagName('dd'));
const anchor = Array.from(document.getElementsByTagName('a'));
const current = document.getElementsByClassName('current');

// Default style
defData.forEach(dd => {
    if(dd.id !== 'acc1') {
        dd.style.display = 'none';
    }
});

// Function
const accordion =  e => {
    e.preventDefault();
    const el = e.target;
    if(el.className !== 'currentBtn') {
        const openEl = getOpenElememt(el);
        slideClose(current[0]);
        slideOpen(openEl);
        removeClass();
        addClass(openEl, el)
    }
};

const addClass = (openEl, el) => {
    openEl.classList.add('current');
    el.classList.add('currentBtn');
};
  
const getOpenElememt = el => {
    const href = el.getAttribute('href')
    const openEl = document.getElementById(href);
    return openEl;
};

const removeClass = () => {
    defData.forEach(dd => {
        dd.classList.remove('current');
    });
    anchor.forEach(a => {
        a.classList.remove('currentBtn');
    });
};


const slideClose = (el, duration = 300) => {
    el.style.width = el.offsetWidth + "px";
    el.offsetWidth;
    el.style.transitionProperty = "width, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.width = 0;
    el.style.padding = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("width");
      el.style.removeProperty("padding");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
};

const slideOpen = (el, duration = 300) => {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "block";
    }
    el.style.display = display;
    let width = el.offsetWidth;
    el.style.width = 0;
    el.style.padding = 0;
    el.offsetWidth;
    el.style.transitionProperty = "width, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.width = width + "px";
    el.style.removeProperty("padding");
    setTimeout(() => {
      el.style.removeProperty("width");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
};

// Event
anchor.forEach(a => {
    a.addEventListener('click', accordion);
});
