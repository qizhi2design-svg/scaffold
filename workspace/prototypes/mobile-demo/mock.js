window.prototypeMock = {
    eyebrow: "移动端验证模板",
    title: "{{title}}",
    subtitle: "用于快速起一个适合 App / H5 的单页原型骨架。",
    heroButtonText: "立即体验",
    sectionTitle: "关键流程",
    toggleButtonText: "查看提示",
    cards: [
        {
            title: "1. 首屏传达",
            description: "先说明用户为什么会继续往下看。"
        },
        {
            title: "2. 核心操作",
            description: "把最关键的输入和按钮集中在单手可触达区域。"
        },
        {
            title: "3. 结果反馈",
            description: "操作后及时给出状态变化或下一步建议。"
        }
    ],
    inputLabel: "输入想验证的场景",
    inputPlaceholder: "例如：新用户首次下单",
    submitButtonText: "记录",
    helperDefault: "建议一句话写清你的假设。",
    helperHero: "这里通常接首屏 CTA，比如开始体验、立即下单、继续注册。",
    helperExpanded: "移动端原型优先验证首屏信息密度、单手操作路径和关键反馈。",
    helperSaved(value) {
        return `已记录验证场景：${value}`;
    },
    tabs: ["首页", "流程", "我的"]
};
