const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clear');

addBtn.addEventListener('click',() => {
    const input = document.getElementById('input').value;
    const newElement = document.createElement('p');
    newElement.append(input);
    document.getElementById('myList').append(newElement);
    document.getElementById('input').value = "";

})

clearBtn.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const newElement = document.createElement('p');
    newElement.append(input);
    document.getElementById('myList').textContent = "";
})