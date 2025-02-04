// 보그 JS 투데이 컴포넌트 - today_area.js

export const LoginComp = Vue.component("today-area-comp", {
  // 1. 템플릿
  template: `
    <div id="today-area">
        <section class="inbox today-area">
          <h2 class="sub-tit">Today’s Stories</h2>
          <div class="post-list-today">
          <ul>
            <li>
                <figure>
                    <img src="${v.imgSrc}" alt="${v.mainCat}">
                    <figcaption>
                    <p class="category">${v.catName}</p>
                    <h3 class="s-tit">${v.title}</h3>
                    <p class="date">${v.dateWriter}</p>
                    </figcaption>
                </figure>
            </li>
            </ul>
          </div>
        </section>
      </div>
    `,
  // 2. 리턴함수 데이터
  data() {
    return {
        // 투데이 영역 정보 데이터
        todayInfo: todayData
    };
  },
  // 3. 메서드
  methods: {},
  // 4. 데이터셋업파트
  created() {},
  // 5. DOM 셋업파트
  mounted() {},
});
