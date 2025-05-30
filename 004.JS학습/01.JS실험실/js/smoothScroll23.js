// Smooth Scroll JS Verson 2023.09
// 부드러운 스크롤 2020.12 초기버전
// 부드러운 스크롤 2023.09 수정버전
// 부드러운 스크롤 2024.04 변수선언개정
// arranged by Tom Brace Parker

// startSS()함수를 호출하여 사용
export default function startSS() {
  // 전체 스크롤 대상일때 document를 보냄
  new SmoothScroll(document, 30, 30);
  // 특정박스일 경우 document.querySelector(선택요소)를 씀!
  // new SmoothScroll(document.querySelector('.wrap'), 60, 12)
}

// 전역변수 스크롤 위치값
let scrollPos;
// -> 다른 코딩으로 스크롤 이동시 이 변수에 일치필요!!!

function SmoothScroll(scrollTarget, speed, smooth) {
  // scrollTarget - 대상요소, speed - 스크롤애니속도, smooth - 부드러운정도
  if (scrollTarget === document)
    scrollTarget =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  let moving = false;
  scrollPos = scrollTarget.scrollTop;
  let frame =
    scrollTarget === document.body &&
    document.documentElement
      ? document.documentElement
      : scrollTarget; // safari is the new IE

  // 최신 통합 이벤트
  scrollTarget.addEventListener("wheel", scrolled, {
    passive: false,
    // 기본기능 막기시 에러발생방지
    // window, document, body 일경우 에러발생함!
  });
  // 구 이벤트
  scrollTarget.addEventListener("mousewheel", scrolled, {
    passive: false,
  });
  // 파이어폭스 이벤트
  scrollTarget.addEventListener(
    "DOMMouseScroll",
    scrolled,
    {
      passive: false,
    }
  );

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    let delta = normalizeWheelDelta(e);

    scrollPos += -delta * speed;
    scrollPos = Math.max(
      0,
      Math.min(
        scrollPos,
        scrollTarget.scrollHeight - frame.clientHeight
      )
    ); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (
          (e.wheelDelta / e.detail / 40) *
          (e.detail > 0 ? 1 : -1)
        );
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    let delta =
      (scrollPos - scrollTarget.scrollTop) / smooth;

    scrollTarget.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  const requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}
