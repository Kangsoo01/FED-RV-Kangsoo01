// 레이아웃 컴포넌트: Layout.jsx

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

export default function Layout() {
  // 리턴구역
  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
} // Layout components
