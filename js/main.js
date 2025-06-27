
  const toggleBtn = document.getElementById('toggleTheme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }

    const cardsData = [
      { title: "برنامه نویسی", text: "برنامه نویسی حرفه‌ای با سابقه بالا", img: "slide4.png" },
      { title: "طراحی سایت", text: "طراحی با HTML، CSS، Bootstrap، JS، PHP، Laravel", img: "slide4.png" },
      { title: "طراحی وردپرس", text: "با قالب‌های حرفه‌ای مانند Astra و ...", img: "slide4.png" },
      { title: "گرافیست", text: "دارای سابقه در طراحی گرافیک", img: "slide4.png" }
    ];
    const cardsContainer = document.getElementById('cards-container');
    cardsData.forEach(card => {
      const col = document.createElement('div');
      col.className = 'col-md-3 mb-4';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${card.img}" class="card-img-top" alt="${card.title}" />
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
          </div>
        </div>
      `;
      cardsContainer.appendChild(col);
    });

    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;
        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        alert('لطفا همه فیلدها را به درستی پر کنید.');
      } else {
        alert('پیام شما ارسال شد. ممنون!');
        form.reset();
      }
    });
  });
