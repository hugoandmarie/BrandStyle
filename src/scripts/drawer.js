const drawer = document.querySelector("#drawer");
const links = document.querySelectorAll("[data-drawer]");
const contents = document.querySelectorAll("[data-content]");
const closes = document.querySelectorAll("[data-drawer-close]");
const overlay = document.querySelector("#drawer-overlay");

function closeDrawer() {
    drawer.classList.remove(
        "translate-y-0",
        "xl:translate-x-0"
    );

    drawer.classList.add(
        "translate-y-full",
        "xl:-translate-x-full"
    );

    overlay.classList.remove("opacity-100");

    overlay.classList.add(
        "opacity-0",
        "pointer-events-none"
    );

    document.body.classList.remove("overflow-hidden");
}

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
        drawer.classList.remove("translate-y-full", "xl:-translate-x-full");
        drawer.classList.add("translate-y-0", "xl:translate-x-0");
        document.body.classList.add("overflow-hidden");
        overlay.classList.remove("opacity-0", "pointer-events-none");
        overlay.classList.add("opacity-100");
        close.focus();
    });
});
//
// closes.forEach((close) => {
//     close.addEventListener("click", () => {
//         drawer.classList.remove(
//             "translate-y-0",
//             "xl:translate-x-0"
//         );
//         drawer.classList.add(
//             "translate-y-full",
//             "xl:-translate-x-full"
//         );
//         document.body.classList.remove("overflow-hidden");
//         overlay.classList.remove("opacity-100");
//         overlay.classList.add("opacity-0", "pointer-events-none");
//     });
// });

overlay.addEventListener("click", closeDrawer);

closes.forEach((button) => {
    button.addEventListener("click", closeDrawer);
});

overlay.addEventListener("click", closeDrawer);