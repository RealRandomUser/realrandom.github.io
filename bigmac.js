const bigMac = document.querySelector('.bigmac');

const list = document.querySelector('#list');

bigMac.addEventListener('click', () => {
    console.log('Big Mac click!'); // Debug
    bigMac.classList.toggle('active');
    list.classList.toggle('active');
    console.log('Clase active:', bigMac.classList, list.classList);
});