document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const resetButton = document.getElementById("resetButton");
    const newTaskButton = document.getElementById("newTaskButton");
    const taskRows = Array.from(document.querySelectorAll("#taskTableBody tr"));

    searchInput?.addEventListener("input", () => {
        const keyword = searchInput.value.trim().toLowerCase();
        taskRows.forEach((row) => {
            const visible = !keyword || row.textContent.toLowerCase().includes(keyword);
            row.style.display = visible ? "" : "none";
        });
    });

    resetButton?.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
        }
        taskRows.forEach((row) => {
            row.style.display = "";
        });
    });

    newTaskButton?.addEventListener("click", () => {
        window.alert("这里适合接后台新建流程。");
    });
});
