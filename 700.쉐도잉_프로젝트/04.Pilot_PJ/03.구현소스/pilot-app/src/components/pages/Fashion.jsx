// 파일럿 PJ = 패션 페이지(남성 / 여성 / 공통 스타일) - Fashion.jsx

import React from "react";

function Fashion() {
  // 라우터 전달객체 받기
  const { state } = useLocation();

  // 카테고리 이름 가져오기
  const catName = state.catName || "아무거나";

  return (
    <>
      <h1>{catName} 패션 페이지</h1>
    </>
  );
}

export default Fashion;
