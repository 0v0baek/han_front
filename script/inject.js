async function injectNavbar() {
  // 네비게이션 바 삽입
  const navbarHtml = await fetch("/html/nav.html");
  let data = await navbarHtml.text();
  document.querySelector(".nav").innerHTML = data;
}

injectNavbar();

async function injectFooter() {
  // 푸터 삽입
  const footerHtml = await fetch("/html/footer.html");
  let data = await footerHtml.text();
  document.querySelector(".footer").innerHTML = data;
}

injectFooter();
