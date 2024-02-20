
//quotes
const quoteText = document.querySelector('.quotes__info-text');


//timer
const timerBtn  = document.querySelector('.timer-btn');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

timerBtn.addEventListener('click', (e) => {
    e.currentTarget.innerHTML = "pause";
})


