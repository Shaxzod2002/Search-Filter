'use strict'
const searchInput = document.getElementById('search'),
    listItem = document.querySelectorAll('.list-group-item');

searchInput.addEventListener('input', () => {
    listItem.forEach(list => {
        if (list.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            list.style.display = '';
            list.style.opacity = '1'

        } else {
            list.style.display = "none";
        }
    })
})