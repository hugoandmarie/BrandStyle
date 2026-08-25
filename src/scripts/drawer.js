const drawer = document.querySelector("#drawer");
const links = document.querySelectorAll("[data-drawer-link]");
const contents = document.querySelectorAll("[data-content]");
const closes = document.querySelectorAll("[data-drawer-close]");
const overlay = document.querySelector("#drawer-overlay");

const drawerRoutes = {
    "/about": "about",
    "/services": "services",
    "/podcast": "podcast",
    "/visibility-adv": "visibility-adv",
    "/contact": "contact",
    "/about-detail": "about-detail",
};

function openDrawer(target) {
    if (!drawer || !overlay) return;

    const content = document.querySelector(
        `[data-content="${target}"]`
    );

    if (!content) return;

    // Hide all drawer content
    contents.forEach((item) => {
        item.classList.add("hidden");
    });

    // Show requested content
    content.classList.remove("hidden");

    // Open drawer
    drawer.classList.remove(
        "translate-y-full",
        "xl:-translate-x-full"
    );

    drawer.classList.add(
        "translate-y-0",
        "xl:translate-x-0"
    );

    // Overlay
    overlay.classList.remove(
        "opacity-0",
        "pointer-events-none"
    );

    overlay.classList.add("opacity-100");

    document.body.classList.add("overflow-hidden");
}

function openDrawerFromPath(path) {
    const target = drawerRoutes[path];

    if (!target) return false;

    openDrawer(target);

    return true;
}

function closeDrawer(updateUrl = true) {
    if (!drawer || !overlay) return;

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

    if (updateUrl) {
        history.pushState({}, "", "/");
    }
}


// --------------------------------------------------
// Navigation links
// --------------------------------------------------

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        if (!(link instanceof HTMLAnchorElement)) return;

        const url = new URL(link.href);

        if (!openDrawerFromPath(url.pathname)) return;

        history.pushState({}, "", url.pathname);
    });
});


// --------------------------------------------------
// Close buttons
// --------------------------------------------------

closes.forEach((button) => {
    button.addEventListener("click", () => {
        closeDrawer();
    });
});

overlay?.addEventListener("click", () => {
    closeDrawer();
});


// --------------------------------------------------
// Browser back / forward
// --------------------------------------------------

window.addEventListener("popstate", () => {
    const target = drawerRoutes[window.location.pathname];

    if (target) {
        openDrawer(target);
    } else {
        closeDrawer(false);
    }
});


// --------------------------------------------------
// Direct URL load
// --------------------------------------------------

openDrawerFromPath(window.location.pathname);