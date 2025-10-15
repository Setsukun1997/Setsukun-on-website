document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    content: form.content.value
  };

  const res = await fetch('https://your-backend-url/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) alert('Message sent!');
  else alert('Error sending message');
});
