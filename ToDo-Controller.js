(function () {
    let input = document.getElementById('inputText');
    let submit = document.getElementById('submitBtn');
    let container = document.getElementById('container');
    // let source = document.getElementById('note-template').innerHTML;
    // let template = Handlebars.compile(source);
    // let html = template(toDoManager.notes);

    window.addEventListener('DOMContentLoaded', toDoManager.printNotes(container));

    submit.addEventListener('click', function (ev) {
        ev.preventDefault();
        const text = input.value;
        toDoManager.addNote(text);
        toDoManager.printNotes(container);
        input.value = '';
    });
})();




