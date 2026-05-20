// 联系我们模态框 - Zoho表单

// 创建模态框HTML
function createContactModal() {
  const modalHTML = `
    <div id="contactFormModal" class="contact-form-modal" style="display:none;">
      <div class="contact-form-modal-overlay"></div>
      <div class="contact-form-modal-content">
        <div class="contact-form-modal-header">
          <h3>联系我们</h3>
          <button class="contact-form-modal-close">&times;</button>
        </div>
        <div class="contact-form-modal-body">
          <iframe id="zohoFormIframe" src="https://forms.zohopublic.in/newgww05gm1/form/Untitled/formperma/VQ9AHLUMSXSC2mVUCoq7moOACgMbouWthPORCNqtgg8" style="width:100%; height:600px; border:none; border-radius:6px;"></iframe>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// 初始化事件监听
function initContactModal() {
  // 找到"Contact Us"链接并添加点击事件
  const contactLinks = document.querySelectorAll('a[href*="become-distributor"], a[href*="contact"]');
  contactLinks.forEach(link => {
    // 只处理导航菜单中的"Contact Us"链接
    if (link.textContent.includes('Contact Us') || link.textContent.includes('contact')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showContactFormModal();
      });
    }
  });
  
  // 模态框关闭事件
  const closeBtn = document.querySelector('.contact-form-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeContactFormModal);
  }
  
  const overlay = document.querySelector('.contact-form-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeContactFormModal);
  }
  
  // 邮箱处理 - 转换为mailto链接
  const emailElements = document.querySelectorAll('.pbmit-contact-widget-email');
  emailElements.forEach(el => {
    const email = el.textContent.trim();
    if (email) {
      el.innerHTML = `<a href="mailto:${email}" style="color: inherit; text-decoration: none;">${email}</a>`;
    }
  });
}

function showContactFormModal() {
  const modal = document.getElementById('contactFormModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeContactFormModal() {
  const modal = document.getElementById('contactFormModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  createContactModal();
  initContactModal();
});
