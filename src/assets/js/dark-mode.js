(() => {
    "use strict";

    const getStoredTheme = () => localStorage.getItem("theme");
    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) return storedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const updateThemeToggleIcon = (theme) => {
        const themeToggle = document.getElementById("theme-toggle-icon");
        const icon = themeToggle.querySelector("i");

        if (icon) {
            icon.classList.remove(
                "bi-sun-fill",
                "bi-moon-stars-fill",
                "bi-circle-half"
            );

            if (theme === "light") {
                icon.classList.add("bi-sun-fill");
            } else if (theme === "dark") {
                icon.classList.add("bi-moon-stars-fill");
            } else {
                icon.classList.add("bi-circle-half");
            }
        }
    };

    const setTheme = (theme) => {
        if (theme === "auto") {
            document.documentElement.setAttribute(
                "data-bs-theme",
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            );
        } else {
            document.documentElement.setAttribute("data-bs-theme", theme);
        }
        updateThemeToggleIcon(theme);
    };

    const showActiveTheme = (theme) => {
        document.querySelectorAll("[data-bs-theme-value]").forEach((el) => {
            el.classList.remove("text-primary");
            el.setAttribute("aria-pressed", "false");
        });

        const activeBtn = document.querySelector(
            `[data-bs-theme-value="${theme}"]`
        );
        if (activeBtn) {
            activeBtn.classList.add("text-primary");
            activeBtn.setAttribute("aria-pressed", "true");
        }
    };

    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);
    showActiveTheme(currentTheme);

    window.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("[data-bs-theme-value]").forEach((button) => {
            button.addEventListener("click", () => {
                const theme = button.getAttribute("data-bs-theme-value");
                setStoredTheme(theme);
                setTheme(theme);
                showActiveTheme(theme);
            });
        });
    });
})();
