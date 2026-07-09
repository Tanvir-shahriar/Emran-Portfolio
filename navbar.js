(() => {
    const headers = document.querySelectorAll(".yc-site-header");

    headers.forEach((header) => {
        const searchArea = header.querySelector(".yc-search-area");
        const searchTrigger = header.querySelector(".yc-search-trigger");
        const searchClose = header.querySelector(".yc-search-close");
        const searchInput = header.querySelector(".yc-search-form input");
        const menuRow = header.querySelector(".yc-menu-row");
        const menuSpacer = header.querySelector(".yc-menu-spacer");
        const toggler = header.querySelector(".yc-navbar-toggler");
        const collapse = header.querySelector(".yc-navbar-collapse");
        const dropdownToggles = header.querySelectorAll(".yc-nav-link[aria-haspopup='true']");

        const setSearchOpen = (open) => {
            if (!searchArea || !searchTrigger) return;
            searchArea.classList.toggle("is-open", open);
            searchArea.toggleAttribute("hidden", !open);
            searchTrigger.setAttribute("aria-expanded", String(open));
            if (open && searchInput) {
                window.setTimeout(() => searchInput.focus(), 60);
            }
        };

        searchTrigger?.addEventListener("click", () => setSearchOpen(true));
        searchClose?.addEventListener("click", () => setSearchOpen(false));

        const setMobileOpen = (open) => {
            if (!collapse || !toggler) return;
            collapse.classList.toggle("is-open", open);
            toggler.setAttribute("aria-expanded", String(open));
        };

        toggler?.addEventListener("click", () => {
            setMobileOpen(!collapse?.classList.contains("is-open"));
        });

        dropdownToggles.forEach((toggle) => {
            toggle.addEventListener("click", (event) => {
                if (window.matchMedia("(min-width: 992px)").matches) return;
                event.preventDefault();
                const item = toggle.closest(".yc-nav-item");
                const isOpen = item?.classList.contains("is-open");
                header.querySelectorAll(".yc-nav-item.is-open").forEach((openItem) => {
                    if (openItem !== item) {
                        openItem.classList.remove("is-open");
                        openItem.querySelector(".yc-nav-link[aria-haspopup='true']")?.setAttribute("aria-expanded", "false");
                    }
                });
                item?.classList.toggle("is-open", !isOpen);
                toggle.setAttribute("aria-expanded", String(!isOpen));
            });
        });

        const stickyOffset = () => {
            const topArea = header.querySelector(".yc-top-area");
            return topArea ? topArea.offsetHeight : 0;
        };

        const updateSticky = () => {
            if (!menuRow || !menuSpacer) return;
            const shouldStick = window.scrollY > stickyOffset();
            const height = menuRow.offsetHeight;
            menuRow.classList.toggle("is-sticky", shouldStick);
            menuSpacer.classList.toggle("is-active", shouldStick);
            menuSpacer.style.height = shouldStick ? `${height}px` : "0px";
        };

        updateSticky();
        window.addEventListener("scroll", updateSticky, { passive: true });
        window.addEventListener("resize", () => {
            if (window.matchMedia("(min-width: 992px)").matches) {
                setMobileOpen(false);
                header.querySelectorAll(".yc-nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
                dropdownToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
            }
            updateSticky();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                setSearchOpen(false);
                setMobileOpen(false);
                header.querySelectorAll(".yc-nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
                dropdownToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
            }
        });
    });
})();
