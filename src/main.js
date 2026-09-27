import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="counter-app">
    <p class="eyebrow">VITE COUNTER</p>
    <h1>カウンター</h1>
    <p id="count" class="count" aria-live="polite">0</p>
    <div class="counter-controls" aria-label="カウンター操作">
      <button id="decrease" type="button">−</button>
      <button id="reset" type="button">リセット</button>
      <button id="increase" type="button">＋</button>
      
    </div>
  </main>
`;

const countEl = document.querySelector('#count');
const decreaseButton = document.querySelector('#decrease');
const increaseButton = document.querySelector('#increase');
const resetButton = document.querySelector('#reset');
let count = 0;

const renderCount = () => {
  countEl.textContent = count;
  countEl.classList.toggle('is-negative', count < 0);
};

increaseButton.addEventListener('click', () => {
  count += 1;
  renderCount();
});

decreaseButton.addEventListener('click', () => {
  count -= 1;
  renderCount();
});

resetButton.addEventListener('click', () => {
  count = 0;
  renderCount();
});