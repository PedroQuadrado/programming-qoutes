let theme = localStorage.theme;
const switchBtn = document.getElementById("switch");

if (theme == undefined) {
  localStorage.setItem("theme", "light");
}
switchBtn.onclick = function () {
    let theme = localStorage.theme;
    if (theme === "light") {
        setTheme("dark", 1);
      } else if (theme === "dark") {
        setTheme("light", 0);
      }
};

if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
} else if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

function setTheme(themeName, deg) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
  switchBtn.style.transform = "rotate(" + 180 * deg + "deg)";
}
