const toDoManager = (function () {
    class ToDoNote {
        constructor(text) {
            this.text = text;
            this.hasLineThrough = false;
        }
    }

    class ToDoManager {
        constructor() {
            this.notes = [];
        }
        addNote(text) {
            if (text) {
                let newNote = new ToDoNote(text)
                this.notes.push(newNote);
                localStorage.setItem('notes', JSON.stringify(this.notes));
            }
        }
        removeNote(ev) {
            let target = Number(ev.target.id);
            this.notes.splice(target, 1);
            localStorage.setItem('notes', JSON.stringify(this.notes));
        }

        printNotes(container) {
            let initialLoadNotes = localStorage.getItem('notes');
            if (initialLoadNotes) {
                this.notes = JSON.parse(localStorage.getItem('notes'));
            }
            container.innerHTML = '';
            this.notes.forEach(note => {
                let newInput = document.createElement('div');
                newInput.className = 'note-wrapper';
                container.appendChild(newInput);

                let newTodo = document.createElement('p');
                newTodo.innerText = note.text;
                if (note.hasLineThrough === false) {
                    newTodo.style.textDecoration = '';
                } else {
                    newTodo.style.textDecoration = 'line-through';
                }

                newTodo.addEventListener('click', function () {
                    if (note.hasLineThrough === false) {
                        this.style.textDecoration = 'line-through';
                        note.hasLineThrough = true;
                        localStorage.setItem('notes', JSON.stringify(toDoManager.notes));
                    } else {
                        this.style.textDecoration = '';
                        note.hasLineThrough = false;
                        localStorage.setItem('notes', JSON.stringify(toDoManager.notes));
                    }
                });
                newInput.appendChild(newTodo);

                let trash = document.createElement('img');
                trash.src = 'trash.png';
                trash.alt = 'delete';
                trash.id = this.notes.indexOf(note);
                trash.className = 'trash-icon';
                trash.addEventListener('click', function (ev) {
                    toDoManager.removeNote(ev);
                    toDoManager.printNotes(container);
                })
                newInput.appendChild(trash);
            })
        }
    }
    return new ToDoManager()
})();





