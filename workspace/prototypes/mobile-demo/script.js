document.addEventListener("DOMContentLoaded", () => {
    const pageData = window.prototypeMock || {};
    const helperText = document.getElementById("helperText");
    const input = document.getElementById("mobileInput");
    const submitButton = document.getElementById("submitNote");
    const heroAction = document.getElementById("heroAction");
    const toggleTips = document.getElementById("toggleTips");
    const heroEyebrow = document.getElementById("heroEyebrow");
    const heroTitle = document.getElementById("heroTitle");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const sectionTitle = document.getElementById("moduleSectionTitle");
    const moduleList = document.getElementById("moduleList");
    const composerLabel = document.getElementById("composerLabel");
    const tabBar = document.getElementById("tabBar");

    if (heroEyebrow && pageData.eyebrow) {
        heroEyebrow.textContent = pageData.eyebrow;
    }

    if (heroTitle && pageData.title) {
        heroTitle.textContent = pageData.title;
    }

    if (heroSubtitle && pageData.subtitle) {
        heroSubtitle.textContent = pageData.subtitle;
    }

    if (heroAction && pageData.heroButtonText) {
        heroAction.textContent = pageData.heroButtonText;
    }

    if (sectionTitle && pageData.sectionTitle) {
        sectionTitle.textContent = pageData.sectionTitle;
    }

    if (toggleTips && pageData.toggleButtonText) {
        toggleTips.textContent = pageData.toggleButtonText;
    }

    if (composerLabel && pageData.inputLabel) {
        composerLabel.textContent = pageData.inputLabel;
    }

    if (input && pageData.inputPlaceholder) {
        input.placeholder = pageData.inputPlaceholder;
    }

    if (submitButton && pageData.submitButtonText) {
        submitButton.textContent = pageData.submitButtonText;
    }

    if (helperText && pageData.helperDefault) {
        helperText.textContent = pageData.helperDefault;
    }

    renderCards(moduleList, pageData.cards || []);
    renderTabs(tabBar, pageData.tabs || []);

    submitButton?.addEventListener("click", () => {
        const value = input?.value.trim() ?? "";
        helperText.textContent = value
            ? resolveSavedMessage(pageData, value)
            : "先输入一句你要验证的场景。";
    });

    heroAction?.addEventListener("click", () => {
        helperText.textContent = pageData.helperHero || "这里通常接首屏 CTA，比如开始体验、立即下单、继续注册。";
    });

    toggleTips?.addEventListener("click", () => {
        const expanded = toggleTips.dataset.expanded === "true";
        toggleTips.dataset.expanded = expanded ? "false" : "true";
        helperText.textContent = expanded
            ? (pageData.helperDefault || "建议一句话写清你的假设。")
            : (pageData.helperExpanded || "移动端原型优先验证首屏信息密度、单手操作路径和关键反馈。");
    });
});

function renderCards(container, cards) {
    if (!container) {
        return;
    }

    container.innerHTML = cards.map((card) => `
        <article class="module-card">
            <strong>${card.title || ""}</strong>
            <p>${card.description || ""}</p>
        </article>
    `).join("");
}

function renderTabs(container, tabs) {
    if (!container) {
        return;
    }

    container.innerHTML = tabs.map((tab, index) => `
        <button class="tab${index === 0 ? " is-active" : ""}">${tab}</button>
    `).join("");
}

function resolveSavedMessage(pageData, value) {
    if (typeof pageData.helperSaved === "function") {
        return pageData.helperSaved(value);
    }
    return `已记录验证场景：${value}`;
}
