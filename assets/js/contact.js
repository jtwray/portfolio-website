(() => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-status');
  let sending = false;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const body = new URLSearchParams(new FormData(form)).toString();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    sending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.dataset.state = 'sending';
    status.textContent = 'Sending your message…';
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.dataset.state = 'success';
      status.textContent = "Thank you. Your message was submitted. I'll be in touch as soon as I can.";
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error.name === 'AbortError'
        ? 'The request timed out; your message may have arrived. Please email james@tuckerwray.com if you need confirmation.'
        : 'Your message could not be confirmed. Your text is still here; please try again or email james@tuckerwray.com.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
})();
