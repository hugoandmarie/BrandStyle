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


// =====================================================
// OPEN DRAWER
// =====================================================

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

    // Show selected drawer content
    content.classList.remove("hidden");

    // Reset drawer scroll
    drawer.scrollTo({
        top: 0,
        behavior: "instant",
    });

    // Open drawer
    drawer.classList.remove(
        "translate-y-full",
        "xl:-translate-x-full"
    );

    drawer.classList.add(
        "translate-y-0",
        "xl:translate-x-0"
    );

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


// =====================================================
// CLOSE DRAWER
// =====================================================

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

        window.dispatchEvent(
            new Event("drawer-route-change")
        );
    }
}


// =====================================================
// NAVIGATION LINKS
// =====================================================

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        if (!(link instanceof HTMLAnchorElement)) return;

        const url = new URL(link.href);

        // Only intercept links that correspond
        // to an existing drawer
        if (!drawerRoutes[url.pathname]) return;

        event.preventDefault();

        openDrawerFromPath(url.pathname);

        // Update browser URL
        history.pushState({}, "", url.pathname);

        // Tell header/footer that route changed
        window.dispatchEvent(
            new Event("drawer-route-change")
        );
    });
});


// =====================================================
// CLOSE BUTTONS
// =====================================================

closes.forEach((button) => {
    button.addEventListener("click", () => {
        closeDrawer();
    });
});

overlay?.addEventListener("click", () => {
    closeDrawer();
});


// =====================================================
// BROWSER BACK / FORWARD
// =====================================================

window.addEventListener("popstate", () => {
    const path = window.location.pathname;

    if (drawerRoutes[path]) {
        openDrawerFromPath(path);
    } else {
        closeDrawer(false);
    }

    window.dispatchEvent(
        new Event("drawer-route-change")
    );
});


// =====================================================
// DIRECT URL LOAD
// =====================================================

openDrawerFromPath(window.location.pathname);