const daysContainer = document.querySelector('.days');
const monthYearElement = document.getElementById('monthYear');

function updateCalendar() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const monthYearFormat = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long' });
  monthYearElement.textContent = monthYearFormat.format(today);

  daysContainer.innerHTML = '';

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day');
    daysContainer.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = i;

    if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      dayElement.classList.add('current-day'); // Adicione esta classe para marcar o dia atual em azul
    }

    daysContainer.appendChild(dayElement);
  }
}

updateCalendar();
