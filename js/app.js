
const items = document.querySelectorAll('.icons');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        let hide = e.target.parentElement.nextElementSibling;
        hide.classList.toggle('hide');
        // console.log(hide);
    });
});

