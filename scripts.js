const startDate = new Date('2022-07-09T00:00:00');

    function updateCounter() {
      const now = new Date();
      const diff = now - startDate;

      // Calcular anos, meses, dias, horas, minutos e segundos
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      // Ajuste para evitar valores negativos
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      // Atualizar o elemento HTML
      document.getElementById('time').innerHTML = `
        ${years} anos, 
        ${months} meses, 
        ${days} dias, 
        ${hours} horas, 
        ${minutes} minutos, 
        ${seconds} segundos
      `;
    }

    // Atualizar o contador a cada segundo
    setInterval(updateCounter, 1000);

    function createHeart() {
      const heart = document.createElement('img');
      heart.src = 'https://cdn.pixabay.com/photo/2017/08/17/15/39/love-2651743_1280.png';
      heart.classList.add('heart');
      
      // Posiciona o coração em uma posição aleatória
      heart.style.left = Math.random() * 100 + 'vw';
      
      // Tamanho aleatório para o coração
      heart.style.width = Math.random() * 30 + 20 + 'px';
      heart.style.height = heart.style.width;
      
      // Duração aleatória da animação
      heart.style.animationDuration = Math.random() * 3 + 7 + 's';
      
      document.querySelector('.heart-container').appendChild(heart);
  
      // Remove o coração após a animação
      setTimeout(() => {
          heart.remove();
      }, 5000);
  }
  
  // Gera corações a cada 300ms
  setInterval(createHeart, 300);