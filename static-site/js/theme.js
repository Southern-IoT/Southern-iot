(function () {
  const root = document.documentElement;
  const storageKey = "southern-iot-theme";

  function storedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (_) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (_) {
      // Ignore storage failures in private or restricted browsing modes.
    }
  }

  function setTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    root.classList.remove("dark", "light");
    root.classList.add(next);
    root.setAttribute("data-theme", next);
    saveTheme(next);

    document.querySelectorAll(".theme-toggle-icon").forEach((icon) => {
      icon.textContent = next === "light" ? "dark_mode" : "light_mode";
    });
    document.querySelectorAll(".theme-toggle-label").forEach((label) => {
      label.textContent = next === "light" ? "Dark mode" : "Light mode";
    });
  }

  function addFloatingToggle() {
    if (document.querySelector(".theme-toggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle theme-fab";
    button.setAttribute("aria-label", "Toggle light and dark mode");
    button.innerHTML = '<span class="material-symbols-outlined theme-toggle-icon">light_mode</span><span class="theme-toggle-label">Light mode</span>';
    document.body.appendChild(button);
  }

  setTheme(storedTheme() || "dark");

  document.addEventListener("DOMContentLoaded", () => {
    addFloatingToggle();
    document.querySelectorAll(".theme-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        setTheme(root.classList.contains("light") ? "dark" : "light");
      });
    });
    setTheme(root.classList.contains("light") ? "light" : "dark");
  });
})();
