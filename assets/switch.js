let darkMode = localStorage.getItem("darkMode"); 
const themeStyle = document.getElementById("theme-style");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  themeStyle.href = "assets/dark.css";
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  themeStyle.href = "assets/light.css";
  localStorage.setItem("darkMode", "disabled");
}

if (darkMode == "enabled") {
    enableDarkMode();
  } else if (darkMode == "disabled") {  
    disableDarkMode(); 
  } else {
    enableDarkMode()
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode"); 
  if (darkMode == "disabled") {
    enableDarkMode();
  } else if (darkMode == "enabled") {  
    disableDarkMode(); 
  } else {
    enableDarkMode()
  }
});