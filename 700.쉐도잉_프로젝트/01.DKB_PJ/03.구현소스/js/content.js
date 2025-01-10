// 서브 페이지 JS - content.js

// 메뉴를 넣기위한 공통함수 불러오기
import comFn from "./common.js";
comFn(); //실행!

// 파라미터 확인하기
// url도 넘어온 물음표가 없으면 첫페이지로 돌려보내기

let pm = location.search;

if(pm.indexOf("?") == -1) {
    alert("��바른 접근이 아��니다~!");
    // 없으면 ����이지로 ��아가라!
    location.href = "indexs.html";
} /////// if /////