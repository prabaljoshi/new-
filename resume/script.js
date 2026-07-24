const windows = document.querySelectorAll(".window");

windows.forEach(win => {
  win.addEventListener("click", () => {

    windows.forEach(w => w.style.borderColor = "#1e293b");

    win.style.borderColor = "#38bdf8";
  });
});