const date = new Date();
const url = "https://ilhammajidzaiman.github.io";
const message = "Check out my portfolio";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
    new bootstrap.Tooltip(el);
});

window.onload = function updateYear() {
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
};

function facebook() {
    const api =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(url);
    window.open(api, "_blank");
}

function whatsapp() {
    const api =
        "https://wa.me/?text=" + encodeURIComponent(message + ": " + url);
    window.open(api, "_blank");
}

function telegram() {
    const api =
        "https://t.me/share/url?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(message);
    window.open(api, "_blank");
}

function twitter() {
    const api =
        "https://twitter.com/intent/tweet?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(message);
    window.open(api, "_blank");
}

function copyLink(el) {
    navigator.clipboard.writeText(url).then(() => {
        const tooltip = bootstrap.Tooltip.getInstance(el);
        tooltip.setContent({ ".tooltip-inner": "Copied" });
        tooltip.show();
        setTimeout(() => {
            tooltip.setContent({ ".tooltip-inner": "Copy" });
        }, 2000);
    });
}
