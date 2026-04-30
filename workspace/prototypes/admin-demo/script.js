document.addEventListener("DOMContentLoaded", () => {
    const pageData = window.prototypeMock || {};
    const searchInput = document.getElementById("searchInput");
    const resetButton = document.getElementById("resetButton");
    const newTaskButton = document.getElementById("newTaskButton");
    const brandName = document.getElementById("brandName");
    const navGroup = document.getElementById("navGroup");
    const pageEyebrow = document.getElementById("pageEyebrow");
    const pageTitle = document.getElementById("pageTitle");
    const statsGrid = document.getElementById("statsGrid");
    const panelTitle = document.getElementById("panelTitle");
    const panelDescription = document.getElementById("panelDescription");
    const taskTableBody = document.getElementById("taskTableBody");

    if (brandName && pageData.brand) {
        brandName.textContent = pageData.brand;
    }

    if (pageEyebrow && pageData.eyebrow) {
        pageEyebrow.textContent = pageData.eyebrow;
    }

    if (pageTitle && pageData.title) {
        pageTitle.textContent = pageData.title;
    }

    if (newTaskButton && pageData.createButtonText) {
        newTaskButton.textContent = pageData.createButtonText;
    }

    if (panelTitle && pageData.panelTitle) {
        panelTitle.textContent = pageData.panelTitle;
    }

    if (panelDescription && pageData.panelDescription) {
        panelDescription.textContent = pageData.panelDescription;
    }

    if (searchInput && pageData.searchPlaceholder) {
        searchInput.placeholder = pageData.searchPlaceholder;
    }

    if (resetButton && pageData.resetButtonText) {
        resetButton.textContent = pageData.resetButtonText;
    }

    renderNav(navGroup, pageData.navItems || []);
    renderStats(statsGrid, pageData.stats || []);
    renderRows(taskTableBody, pageData.rows || []);

    searchInput?.addEventListener("input", () => {
        const keyword = searchInput.value.trim().toLowerCase();
        const taskRows = Array.from(document.querySelectorAll("#taskTableBody tr"));
        taskRows.forEach((row) => {
            const visible = !keyword || row.textContent.toLowerCase().includes(keyword);
            row.style.display = visible ? "" : "none";
        });
    });

    resetButton?.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
        }
        const taskRows = Array.from(document.querySelectorAll("#taskTableBody tr"));
        taskRows.forEach((row) => {
            row.style.display = "";
        });
    });

    newTaskButton?.addEventListener("click", () => {
        window.alert(pageData.createActionMessage || "这里适合接创建抽屉、弹窗或新建流程。");
    });
});

function renderNav(container, items) {
    if (!container) {
        return;
    }

    container.innerHTML = items.map((item, index) => `
        <button class="nav-item${index === 0 ? " is-active" : ""}">${item}</button>
    `).join("");
}

function renderStats(container, stats) {
    if (!container) {
        return;
    }

    container.innerHTML = stats.map((item) => `
        <article class="stat-card">
            <span>${item.label || ""}</span>
            <strong>${item.value || ""}</strong>
        </article>
    `).join("");
}

function renderRows(container, rows) {
    if (!container) {
        return;
    }

    container.innerHTML = rows.map((row) => `
        <tr>
            <td>${row.task || ""}</td>
            <td>${row.owner || ""}</td>
            <td><span class="tag${row.statusClass ? ` ${row.statusClass}` : ""}">${row.status || ""}</span></td>
            <td>${row.updatedAt || ""}</td>
        </tr>
    `).join("");
}
