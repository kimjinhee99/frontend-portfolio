// full page
new fullpage('#fullpage', {
  responsiveWidth: 760,

  // licenseKey: 'YOUR LICENSE KEY HERE ',
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
// title.forEach(li => li.addEventListener('click', () => {
//   const url = li.dataset.url;
//   console.log(previewImg.src);
//   previewImg.src = url;
// })
// );

// .title을 클릭하면 preview_img 애니메이션 실행
// title.forEach(click => {
//   click.addEventListener('click', e => {
//     console.log(previewImg);
//     preview.forEach(el => {
//       el.animate (
//         {
//           transform: ['translateY(0)'],
//           transform: ['translateY(-42%)']
//         },
//         {
//           duration: 4000,
          
//           // delay: 1000,
//           // easing: 'linear',
//           // iterations: '3',
//         }
//       )
//     });
//   });
// });

// portfolio 이미지 스크롤 애니메이션
const portfolio1 = document.querySelector('#portfolio1');
const portfolioBox1 = document.querySelector('#portfolio1_box');
const portfolioImg1 = document.querySelector('#portfolioImg1');
const portfolio2 = document.querySelector('#portfolio2');
const portfolioBox2 = document.querySelector('#portfolio2_box');
const portfolioImg2 = document.querySelector('#portfolioImg2');
const portfolio3 = document.querySelector('#portfolio3');
const portfolioBox3 = document.querySelector('#portfolio3_box');
const portfolioImg3 = document.querySelector('#portfolioImg3');
const portfolio4 = document.querySelector('#portfolio4');
const portfolioBox4 = document.querySelector('#portfolio4_box');
const portfolioImg4 = document.querySelector('#portfolioImg4');

portfolio1.addEventListener('click', () => {
  portfolioBox1.style.display = 'block';
  portfolioBox2.style.display = 'none';
  portfolioBox3.style.display = 'none';
  portfolioBox4.style.display = 'none';

  portfolioImg1.animate (
    {
      transform: ['translateY(-59%)']
    },
    {
      duration: 5000,
      iterations: Infinity,
    }
  );
});

portfolio2.addEventListener('click', () => {
  portfolioBox2.style.display = 'block';
  portfolioBox1.style.display = 'none';
  portfolioBox3.style.display = 'none';
  portfolioBox4.style.display = 'none';

  portfolioImg2.animate (
    {
      transform: ['translateY(-63%)']
    },
    {
      duration: 5000,
      iterations: Infinity,
      
    }
  );
});

portfolio3.addEventListener('click', () => {
  portfolioBox3.style.display = 'block';
  portfolioBox1.style.display = 'none';
  portfolioBox2.style.display = 'none';
  portfolioBox4.style.display = 'none';

  portfolioImg3.animate (
    {
      transform: ['translateY(-73%)']
    },
    {
      duration: 5000,
      iterations: Infinity,
    }
  );
});

portfolio4.addEventListener('click', () => {
  portfolioBox4.style.display = 'block';
  portfolioBox1.style.display = 'none';
  portfolioBox2.style.display = 'none';
  portfolioBox3.style.display = 'none';

  portfolioImg4.animate (
    {
      transform: ['translateY(-85%)']
    },
    {
      duration: 8000,
      iterations: Infinity,
    }
  );
});

/* -------- skills ------- */
// 스와이퍼
var swiper = new Swiper(".skillsSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
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