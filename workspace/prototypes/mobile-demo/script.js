document.addEventListener("DOMContentLoaded", () => {
    const helperText = document.getElementById("helperText");
    const input = document.getElementById("mobileInput");
    const submitButton = document.getElementById("submitNote");
    const heroAction = document.getElementById("heroAction");
    const toggleTips = document.getElementById("toggleTips");

    submitButton?.addEventListener("click", () => {
        const value = input?.value.trim() ?? "";
        helperText.textContent = value ? `已记录验证场景：${value}` : "先输入一句你要验证的场景。";
    });

    heroAction?.addEventListener("click", () => {
        helperText.textContent = "这里通常接移动端首屏 CTA。";
    });

    toggleTips?.addEventListener("click", () => {
        helperText.textContent = "移动端原型优先验证单手路径、信息密度和关键反馈。";
    });
});
