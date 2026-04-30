document.addEventListener("DOMContentLoaded", () => {
    const pageData = window.prototypeMock || {};
    const titleElement = document.getElementById("pageTitle");
    const subtitleElement = document.getElementById("pageSubtitle");
    const featureGrid = document.getElementById("featureGrid");
    const submitButton = document.getElementById("submitBtn");
    const userInput = document.getElementById("userInput");

    if (titleElement && pageData.title) {
        titleElement.textContent = pageData.title;
    }

    if (subtitleElement && pageData.subtitle) {
        subtitleElement.textContent = pageData.subtitle;
    }

    if (userInput && pageData.inputPlaceholder) {
        userInput.placeholder = pageData.inputPlaceholder;
    }

    if (submitButton && pageData.submitButtonText) {
        submitButton.textContent = pageData.submitButtonText;
    }

    renderFeatureCards(featureGrid, pageData.features || []);

    submitButton?.addEventListener("click", () => {
        const inputValue = userInput?.value.trim() || "";

        if (!inputValue) {
            showResult(pageData.emptyInputMessage || "请输入内容", "error");
            return;
        }

        const message = typeof pageData.successMessage === "function"
            ? pageData.successMessage(inputValue)
            : `已接收到您的输入: "${inputValue}"`;

        showResult(message, "success");

        if (userInput) {
            userInput.value = "";
        }
    });

    userInput?.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            submitButton?.click();
        }
    });
});

function renderFeatureCards(container, features) {
    if (!container) {
        return;
    }

    container.innerHTML = features.map((feature) => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon || ""}</div>
            <h3>${feature.title || ""}</h3>
            <p>${feature.description || ""}</p>
        </div>
    `).join("");
}

function showResult(message, type) {
    const resultDiv = document.getElementById("result");
    if (!resultDiv) {
        return;
    }

    resultDiv.textContent = message;
    resultDiv.className = `result-message show ${type}`;

    setTimeout(() => {
        resultDiv.classList.remove("show");
    }, 3000);
}
