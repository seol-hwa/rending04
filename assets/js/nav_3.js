//nav_3
//mobile
// 햄버거버튼
const $nav3_btn = document.querySelector(".header3__pc-wrap .mo-nav-btn");
// 모바일 해상도 네비박스
const $nav3_moWrap = document.querySelector(".mo-nav-wrap-3");
//pc
// const nav3Tree = document.querySelector(".nav-style-3");
// const nav3Style = document.querySelector(".mo-nav-wrap-3");
// const nav3Logo = document.querySelector(".header3__pc-wrap h1 a");
// const nav3MainMenu = nav3Tree.querySelectorAll(".main-list__menu");
// sns link
const $nav3Sns = document.querySelectorAll(".mo-nav-wrap__footer .sns");
//sns link length
const $snsLength = $nav3Sns.length;

//mobile
// 햄버거 버튼 클릭
$nav3_btn.addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    // 모바일 메뉴창 열릴때
    // 스크롤 막기
    document.querySelector("body").style.overflowY = "hidden";
    this.setAttribute("aria-expanded", true);
    $nav3_moWrap.setAttribute("aria-hidden", false);
    //
    this.classList.add("active");
    $nav3_moWrap.classList.add("active");
  } else {
    // 모바일 메뉴창 닫힐때
    // 스크롤 가능하게
    document.querySelector("body").style.overflowY = "initial";
    this.setAttribute("aria-expanded", false);
    $nav3_moWrap.setAttribute("aria-hidden", true);
    //
    this.classList.remove("active");
    $nav3_moWrap.classList.remove("active");
  }
});
// 모바일메뉴 마지막 번째 sns link 탭키
$nav3Sns[$snsLength - 1].addEventListener("keydown", (e) => {
  const key = e.keyCode || e.which; //키보드 코드값
  if (key === 9) {
    //탭키
    e.preventDefault();
    //햄버거버튼으로 이동
    $nav3_btn.focus();
  }
});
