// full page
new fullpage('#fullpage', {

  // Get your license at https://alvarotrigo.com/fullPage/pricing/
  licenseKey: 'YOUR LICENSE KEY HERE ',
  // scrollBar: true,
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
});

/* --------- header --------- */

/* --------- about me --------- */

/* --------- portfolio --------- */
const title = document.querySelectorAll('.title');
const subTitle = document.querySelectorAll('.sub_list');
const subEx = document.querySelectorAll('.sub_explain');
const preview = document.querySelectorAll('.preview_img');
const previewImg = document.querySelector('#img');

// .title을 클릭했을 때
title.forEach( click => {
  click.addEventListener('click', e => {

    // .sub_list에 active 클래스 붙음
    subTitle.forEach ( ul => ul.classList.remove('active'));
    // console.log(e.target);
    // console.log(e.currentTarget);
    e.currentTarget.firstElementChild.classList.add('active');

    // // .title에 active 클래스 붙음
    title.forEach(li => li.classList.remove('active'));
    e.currentTarget.classList.add('active');

    // // .sub_explain에 active 클래스 붙음
    subEx.forEach(li => li.classList.remove('active'));
    e.currentTarget.lastElementChild.classList.add('active'); 
  })
});

// .title을 클릭하면 preview_img의 이미지 주소가 바뀜
title.forEach(li => li.addEventListener('click', e => {
  const url = li.dataset.url;
  console.log(previewImg.src);
  previewImg.src = url;
  // imgs.src=url;
}))


/* -------- skills ------- */
// 스와이퍼
var swiper = new Swiper(".skillsSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ------- contact ------- */

// cloud slider
var swiper = new Swiper('.contact_cloud', {
  speed: 65000,
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

// 상단 이동
