//header
const $header = document.querySelector(".con-wrap__header3");
//visual
const $visualCont = document.querySelector(".visual");
const $visualImg = document.querySelector(".visual-img-wrap");
const $visualText = document.querySelector(".visual-box");
//intro
const $introCont = document.querySelector(".intro-con");
const $introItem = document.querySelectorAll("._intro-item");
// duologue
const $duoCont = document.querySelector(".duologue-con");
const $duoItem = document.querySelectorAll("._duolg-item");
// benefit
const $bnfCont = document.querySelector(".benefit-con");
const $bnfItem = document.querySelectorAll("._bnf-item");
// brand
const $brandCont = document.querySelector(".brand-con");
const $brandItem = document.querySelectorAll("._brand-item");
//consult
const $consultCont = document.querySelector(".consult-con");
const $concultItem = document.querySelectorAll("._consult-item");

visualGsap();
//visual gsap
function visualGsap() {
  const $tl = gsap.timeline();

  $tl
    .to($visualCont, {
      duration: 0.5,
      opacity: 1,
    })
    .to($visualImg, {
      duration: 0.4,
      opacity: 1,
    })
    .to($visualText, {
      duration: 0.4,
      opacity: 1,
    });
}

window.addEventListener("scroll", () => {
  //header background color 변경
  if ($introCont.getBoundingClientRect().top <= 0) {
    //아래 스크롤
    $header.classList.add("scroll");
  } else {
    //위 스크롤
    $header.classList.remove("scroll");
  }
});

//스크롤 트리거 불러오기(플러그인 안정화)
gsap.registerPlugin(ScrollTrigger);
//gsap scroll trigger section별 기준점 배열
// const $gsapPoint = gsap.utils.toArray("._gsap");
fadeUp($introItem, $introCont);
fadeUp($duoItem, $duoCont);
fadeUp($bnfItem, $bnfCont);
fadeUp($brandItem, $brandCont);
fadeUp($concultItem, $consultCont);

function fadeUp(item, triggerPoint) {
  for (let i = 0; i < item.length; i++) {
    gsap.to(item[i], {
      scrollTrigger: {
        trigger: triggerPoint,
        start: "top center",
        markers: true,
      },
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0.3 * i,
    });
  }
}

// });
