const drawer = document.querySelector("#drawer");
const links = document.querySelectorAll("[data-drawer]");
const contents = document.querySelectorAll("[data-content]");
const close = document.querySelector("#drawer-close");

links.forEach((link) => {
    link.addEventListener("click", () => {
        const target = link.dataset.drawer;

        // Hide all content
        contents.forEach((content) => {
            content.classList.add("hidden");
        });

        // Show selected content
        document
            .querySelector(`[data-content="${target}"]`)
            .classList.remove("hidden");

        // Open drawer
        drawer.classList.remove("translate-y-full", "md:-translate-x-full");
        drawer.classList.add("translate-y-0", "md:translate-x-0");
        document.body.classList.add("overflow-hidden");
        close.focus();
    });
});

close.addEventListener("click", () => {
    // Close drawer
    drawer.classList.remove("translate-y-0", "md:translate-x-0");
    drawer.classList.add("translate-y-full", "md:-translate-x-full");
    document.body.classList.remove("overflow-hidden");
});