const barre = document.getElementById("nvb");
const ouvbarre = document.querySelector(".menu");

barre.addEventListener("click", function() {

    ouvbarre.classList.toggle('active');

    if (ouvbarre.classList.contains('active')) {
        barre.className = "uil uil-times nav_icon";
        ouvbarre.style.display = "block";
    } else {
        barre.className = "uil uil-bars nav_icon";
        ouvbarre.style.display = "none";
    }

});

const zone = document.getElementsByClassName("tra");
const fleches = document.getElementsByClassName("trb");

function updateFlecheClasses() {
    for (let i = 0; i < zone.length; i++) {
        const fleche = fleches[i];
        if (window.innerWidth > 770) {
            fleche.className = "trb uil uil-arrow-down float-end active";
        } else {
            if (fleche.classList.contains('active')) {
                fleche.className = "trb uil uil-arrow-down float-end active";
            } else {
                fleche.className = "trb uil uil-angle-right-b float-end";
            }
        }
    }
}

updateFlecheClasses();

window.addEventListener('resize', updateFlecheClasses);

for (let i = 0; i < zone.length; i++) {
    zone[i].addEventListener("click", function() {
        const fleche = fleches[i];

        if (window.innerWidth <= 770) {
            fleche.classList.toggle('active');

            if (fleche.classList.contains('active')) {
                fleche.className = "trb uil uil-arrow-down float-end active";
            } else {
                fleche.className = "trb uil uil-angle-right-b float-end";
            }
        }
    });
}


let currentSlide = 0;

function showSlide(index) {

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

slides.style.transform = 'translateX(' + (-index * 100) + '%)';

dots.forEach(dot => dot.classList.remove('active'));

dots[index].classList.add('active');

currentSlide = index;

}



let previousIndex = -1;
const totalDivs = 5;

function getRandomIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * totalDivs);
    } while (randomIndex === previousIndex && totalDivs > 1);
    
    previousIndex = randomIndex;
    return randomIndex;
}

function rotateDiv() {
    const allDivs = document.querySelectorAll('.head1a > div');
    allDivs.forEach(div => {
        div.style.display = 'none';
        div.style.flex = '0';
        div.classList.remove('slide-in-left', 'slide-in-right');
    });
    
    const currentIndex = getRandomIndex();
    const animationClass = Math.random() < 0.5 ? 'slide-in-left' : 'slide-in-right';
    
    if (allDivs[currentIndex]) {
        allDivs[currentIndex].style.display = 'block';
        allDivs[currentIndex].style.flex = '1';
        allDivs[currentIndex].classList.add(animationClass);
    }
}

setInterval(rotateDiv, 5000);
rotateDiv();



function toggleDetailsHover(enable) {
    document.querySelectorAll('details').forEach(details => {
        const newDetails = details.cloneNode(true);
        details.parentNode.replaceChild(newDetails, details);

        if (enable) {
            newDetails.addEventListener('mouseover', () => {
                newDetails.setAttribute('open', true);
            });

            newDetails.addEventListener('mouseout', () => {
                newDetails.removeAttribute('open');
            });
        }
    });
}

function handleResize() {
    const shouldEnable = window.innerWidth >= 770;
    toggleDetailsHover(shouldEnable);
}

window.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('resize', handleResize);



function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'fr',
    includedLanguages: 'en',
    autoDisplay: false
  }, 'google_translate_element');
}

function loadGoogleTranslate() {
  const googleTranslateElement = document.getElementById('google_translate_element');
  let script = document.getElementById('google_translate_script');

  if (!script) {
    script = document.createElement('script');
    script.id = 'google_translate_script';
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
    script.onload = () => googleTranslateElement.style.display = 'block';
  } else {
    googleTranslateElement.style.display = 'block';
  }
}

function cancelTranslation() {
  window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('translate-image')?.addEventListener('click', loadGoogleTranslate);
  document.getElementById('translate-image1')?.addEventListener('click', cancelTranslation);
});



let lastScrollTop = 0;
let scrollThreshold = 200;
const floatingHeader = document.getElementById('head0a');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > scrollThreshold) {

        if (currentScroll < lastScrollTop) {
            
            floatingHeader.classList.add('visible');
        } else {
            
            floatingHeader.classList.remove('visible');
        }
    } else {
        
        floatingHeader.classList.remove('visible');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});