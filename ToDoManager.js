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

            let source = document.getElementById('note-template').innerHTML;
            let template = Handlebars.compile(source);
            let html = template(toDoManager);
            container.innerHTML = html;

            let allTextFields = document.querySelectorAll('p');
            allTextFields.forEach(field => field.addEventListener('click', function (ev) {
                if (ev.target.className === 'no-line-through') {
                    ev.target.className = 'line-through'; 
                    toDoManager.notes[ev.target.id].hasLineThrough = true;
                } else {
                    ev.target.className = 'no-line-through';
                    toDoManager.notes[ev.target.id].hasLineThrough = false;
                }
                localStorage.setItem('notes', JSON.stringify(toDoManager.notes));
            }))

            let allTrashBtns = document.querySelectorAll('.trash-icon');
            allTrashBtns.forEach(btn => btn.addEventListener('click', function (ev) {
                toDoManager.removeNote(ev);
                toDoManager.printNotes(container);
            }))
        }
    }
    return new ToDoManager()
})();





