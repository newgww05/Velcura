// 隐藏Revolution Slider并用浅色背景代替
document.addEventListener('DOMContentLoaded', function() {
  // 隐藏Revolution Slider
  const revSlider = document.getElementById('rev_slider_3_1');
  if (revSlider) {
    revSlider.style.display = 'none';
  }
  
  // 隐藏所有Revolution Slider相关的容器
  const revContainers = document.querySelectorAll('[class*="rev_slider"], [class*="tp-"]');
  revContainers.forEach(function(container) {
    if (container.id === 'rev_slider_3_1' || container.parentElement.id === 'rev_slider_3_1') {
      container.style.display = 'none';
    }
  });
  
  // 创建一个占位符
  const placeholder = document.createElement('div');
  placeholder.style.width = '100%';
  placeholder.style.height = '600px';
  placeholder.style.backgroundColor = '#f0f0f0';
  placeholder.style.display = 'flex';
  placeholder.style.alignItems = 'center';
  placeholder.style.justifyContent = 'center';
  placeholder.style.color = '#999';
  placeholder.style.fontSize = '18px';
  placeholder.style.fontFamily = 'Arial, sans-serif';
  placeholder.textContent = 'Image Placeholder';
  
  // 将占位符插入到slider的位置
  if (revSlider && revSlider.parentElement) {
    revSlider.parentElement.insertBefore(placeholder, revSlider);
  }
});
