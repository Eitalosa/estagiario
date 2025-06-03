document.getElementById('chat-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const promptInput = document.getElementById('prompt');
  const message = promptInput.value.trim();
  if (!message) return;

  appendMessage('user', message);
  promptInput.value = '';

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    if (response.ok) {
      appendMessage('bot', data.reply);
    } else {
      appendMessage('bot', data.error || 'Erro');
    }
  } catch (err) {
    appendMessage('bot', 'Falha na comunicação com o servidor');
  }
});

function appendMessage(role, text) {
  const messages = document.getElementById('messages');
  const div = document.createElement('div');
  div.classList.add('message', role);
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
