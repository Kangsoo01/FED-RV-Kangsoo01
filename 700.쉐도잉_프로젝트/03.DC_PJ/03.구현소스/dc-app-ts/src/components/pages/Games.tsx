import React from "react";
import Banner from "../modules/Banner";
import VidIntro from "../modules/VidIntro";
import { CatName } from "../../types/common";

function Games({ catName }:CatName) {
  // catName - 페이지 카테고리명 데이터

  // 리턴 코드구역 ////////////
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName={catName} />
      {/* 2. 비디오 소개 컴포넌트 */}
      <VidIntro catName={catName} clsName="on" />
    </>
  );
}

export default Games;
