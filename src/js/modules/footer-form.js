/**
 * Footer Contact Form Handler
 * Integração com Formspree para envio de emails
 */

function initFooterForm() {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) {
    console.warn('Form de contato não encontrado');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form.querySelector('#email').value.trim();
    const text = form.querySelector('#message').value.trim();
    const originalText = submitBtn.textContent;

    // Validação
    if (!email || !text) {
      showMessage('✕ Preencha todos os campos', 'error');
      return;
    }

    if (email.length < 5) {
      showMessage('✕ Email inválido', 'error');
      return;
    }

    // Estado: enviando
    message.textContent = '';
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    try {
      const response = await fetch('https://formspree.io/f/xqevqrlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: text })
      });

      if (response.ok) {
        showMessage('✓ Mensagem enviada com sucesso!', 'success');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar');
      }
    } catch (error) {
      console.error('Erro:', error);
      showMessage('✗ Erro ao enviar. Tente novamente.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  });

  /**
   * Exibe mensagem de sucesso/erro
   */
  function showMessage(text, type) {
    message.textContent = text;
    message.className = `form-message ${type}`;

    // Scroll no mobile
    if (window.innerWidth < 768) {
      message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Limpar após 4s se sucesso
    if (type === 'success') {
      setTimeout(() => {
        message.textContent = '';
        message.className = 'form-message';
      }, 4000);
    }
  }
}

export { initFooterForm };