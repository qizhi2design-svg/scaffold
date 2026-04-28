// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  console.log('原型页面已加载');

  // 为按钮添加点击事件
  const primaryButton = document.querySelector('.primary-button');
  if (primaryButton) {
    primaryButton.addEventListener('click', function() {
      alert('按钮被点击了！');
    });
  }

  // 为功能卡片添加点击事件
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.addEventListener('click', function() {
      console.log(`功能卡片 ${index + 1} 被点击`);
      // 添加点击动画效果
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
});
