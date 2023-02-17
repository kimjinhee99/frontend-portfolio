// 배너 스와이퍼

var bannerswiper = new Swiper('.banner_slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  cssMode: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 배너 메뉴바
document
  .querySelector('.slide01')
  .addEventListener('click', function (e) {
    e.preventDefault();
    bannerswiper.slideTo(1, 1000);
  });

  document
  .querySelector('.slide02')
  .addEventListener('click', function (e) {
    e.preventDefault();
    bannerswiper.slideTo(2, 1000);
  });

  document
  .querySelector('.slide03')
  .addEventListener('click', function (e) {
    e.preventDefault();
    bannerswiper.slideTo(3, 1000);
  });
  
  document
  .querySelector('.slide04')
  .addEventListener('click', function (e) {
    e.preventDefault();
    bannerswiper.slideTo(4, 1000);
  });

// LOGOSLIDER

var logoswiper = new Swiper('.logo_slider', {
  speed: 20000,
  loop: true,
  slidesPerView: 'auto',
  // 드래그 막기
  allowTouchMove: false,
  noSwiping : true,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

// 스크롤 다운 footer
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const body = document.querySelector('body');

addEventListener('scroll', () => {
  console.log(`scrollY: ${scrollY}`);

  if(scrollY >= 1700) {
    header.style.opacity = 0;
  } else {
    header.style.opacity = 1;

  }
})

// 메뉴 레이아웃
const menu = document.querySelector('.menu_layer');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

menuIcon.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('no_scroll');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('no_scroll');
})

// 소메뉴 토글
const menuT = document.querySelectorAll('.menu_t');
const menuTitle = document.querySelectorAll('.menu_title');

menuTitle.forEach(click => {
  click.addEventListener('click', (e) => {
    menuT.forEach(e => {
      e.classList.remove('active');
      e.addEventListener(('click') , (e) => {
        e.currentTarget.classList.toggle('active');
      });
      });
    });
  });

// 검색창
const search = document.querySelector('.search_layer');
const searchIcon = document.querySelector('.searchIcon');
const searchClose = document.querySelector('.close');
const menusearchIcon = document.querySelector('.menuSearchIcon');

searchIcon.addEventListener('click', () => {
  search.classList.add('active');
});
searchClose.addEventListener('click', () => {
  search.classList.remove('active');
});
menusearchIcon.addEventListener('click', () => {
  search.classList.add('active');
});