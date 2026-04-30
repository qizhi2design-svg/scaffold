window.prototypeMock = {
    title: "{{title}}",
    subtitle: "这是一个原型页面示例",
    features: [
        {
            icon: "🎯",
            title: "功能一",
            description: "功能描述文本"
        },
        {
            icon: "⚡",
            title: "功能二",
            description: "功能描述文本"
        },
        {
            icon: "🚀",
            title: "功能三",
            description: "功能描述文本"
        }
    ],
    inputPlaceholder: "输入内容...",
    submitButtonText: "提交",
    emptyInputMessage: "请输入内容",
    successMessage(inputValue) {
        return `已接收到您的输入: "${inputValue}"`;
    }
};
