// 메인영역 컴포넌트: MainArea.jsx

import { Outlet } from "react-router-dom";

export default function MainArea() {
  // 리턴구역
  return (
    <main className="cont">
        <Outlet />
    </main>
  );
} // MainArea components
