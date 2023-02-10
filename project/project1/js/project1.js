// 메뉴바 스크롤 이벤트
const menuBar = document.querySelector('nav');
const menuList = document.querySelector('.menu');

// 휠 다운하면 메뉴바 숨김
addEventListener('wheel', e => {
  // console.log(e.deltaY);
  // 양수면 휠 다운 / 음수는 휠 업
  // if (e.deltaY > 1) {
  //   menuList.style.opacity = '0';
  //   menuList.style.transition = '1s';
  // } else {
  //   menuList.style.opacity = '1';
  // }
});

// 메뉴바 글자 색상 스크롤 이벤트 
addEventListener('scroll', () => {
  console.log(`scrollY: ${scrollY}`);

  if (scrollY >= 700) {
    menuList.style.color = '#AED0EE';
  } else {
    menuList.style.color = '#fff';
  }
})

// banner 스크롤 이벤트
const bannerTxt = document.querySelectorAll('.banner_main_txt, .banner_explain_txt');

const bannerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
}

const bannerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {

    }
  });
}, bannerOptions);
console.log(bannerTxt);

bannerTxt.forEach(el => bannerObserver.observe(el));

// header bgtext 스크롤 이벤트
const bgText = document.querySelector('.banner_bg');

addEventListener('scroll', () => {
  bgText.style.right = `${- 920 + (scrollY)}px`
});

// 화면에 preview_box가 보여지면 애니메이션 실행
const previewImg = document.querySelectorAll('.preview_box > img');

const aniOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2
}

const aniObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      // entry.target.classList.remove('active');
    }
  });
}, aniOptions);

previewImg.forEach(el => aniObserver.observe(el));


// 스크롤 이벤트
const title = document.querySelectorAll('.title_box');
const txtBox = document.querySelectorAll('.explain_txt_box');

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      // entry.target.classList.remove('active');
    }
  });
}, options);

title.forEach(el => observer.observe(el));
txtBox.forEach(el => observer.observe(el));