// 기능적 설명의 링크
const modal = document.querySelector('#modal');
const btnOpenPopup = document.querySelector('#modal_chest');

btnOpenPopup.addEventListener('click', () => {
    modal.classList.toggle('show');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.toggle('show');
    }
});

// 운동1에 대한 링크
const modal_ex1 = document.querySelector('#modal_ex1');
const btnOpenPopup_ex1 = document.querySelector('#pex1_div1');

btnOpenPopup_ex1.addEventListener('click', () => {
    modal_ex1.classList.toggle('show');
});

modal_ex1.addEventListener('click', (event) => {
    if (event.target === modal_ex1) {
        modal_ex1.classList.toggle('show');
    }
});

// 운동2에 대한 링크
const modal_ex2 = document.querySelector('#modal_ex2');
const btnOpenPopup_ex2 = document.querySelector('#pex2_div1');

btnOpenPopup_ex2.addEventListener('click', () => {
    modal_ex2.classList.toggle('show');
});

modal_ex2.addEventListener('click', (event) => {
    if (event.target === modal_ex2) {
        modal_ex2.classList.toggle('show');
    }
});