fetch('https://your-backend-url/api/timeline')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('timeline');
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><small>${item.date}</small>`;
      container.appendChild(div);
    });
  });
