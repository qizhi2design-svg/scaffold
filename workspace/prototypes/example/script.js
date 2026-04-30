document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const userInput = document.getElementById("userInput");
    const resultDiv = document.getElementById("result");

    submitBtn?.addEventListener("click", () => {
        const inputValue = userInput?.value.trim() ?? "";
        if (!resultDiv) return;

        if (!inputValue) {
            showResult(resultDiv, "请输入内容", "error");
            return;
        }

        showResult(resultDiv, `已接收到您的输入: "${inputValue}"`, "success");
        if (userInput) {
            userInput.value = "";
        }
    });
});

function showResult(resultDiv, message, type) {
    resultDiv.textContent = message;
    resultDiv.className = `result-message show ${type}`;
    setTimeout(() => {
        resultDiv.classList.remove("show");
    }, 3000);
}
