const form = document.querySelector('.form');
const input = document.querySelector('.form__note');
const listNotes = document.querySelector('.list-notes');

const array = [];

const savedNotes = localStorage.getItem('notes');
listNotes.innerHTML = savedNotes;

function createElement(newNote) {
    const li = document.createElement('li');
    li.className = "note";
    li.textContent = newNote;
    listNotes.append(li);
    return li;
}

function addNote(evt) {
    evt.preventDefault();

    const element = createElement(input.value);
    array.push(`${element.outerHTML}`);
    console.log(array);

    localStorage.setItem('notes', array.join(''));
    input.value = '';
}

form.addEventListener('submit', addNote);
