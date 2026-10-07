const branchTabs = [...document.querySelectorAll(".branch-tab")];
const branchPanels = [...document.querySelectorAll(".location-panel")];

function selectBranch(branch, moveFocus = false) {
    branchTabs.forEach((tab) => {
        const selected = tab.dataset.branch === branch;
        tab.classList.toggle("is-active", selected);
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        if (selected && moveFocus) tab.focus();
    });

    branchPanels.forEach((panel) => {
        const selected = panel.dataset.panel === branch;
        panel.classList.toggle("is-active", selected);
        panel.hidden = !selected;
    });
}

branchTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectBranch(tab.dataset.branch));
    tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0
            : event.key === "End" ? branchTabs.length - 1
                : (index + (event.key === "ArrowRight" ? 1 : branchTabs.length - 1)) % branchTabs.length;
        selectBranch(branchTabs[nextIndex].dataset.branch, true);
    });
});

document.querySelectorAll(".branch-select").forEach((button) => {
    button.addEventListener("click", () => {
        selectBranch(button.dataset.branch);
        document.querySelector("#ubicaciones").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
