(function () {
    let input = document.getElementById('inputText');
    let submit = document.getElementById('submitBtn');
    let container = document.getElementById('container');
    
    window.addEventListener('DOMContentLoaded', toDoManager.printNotes(container));

    submit.addEventListener('click', function (ev) {
        ev.preventDefault();
        const text = input.value;
        toDoManager.addNote(text);
        toDoManager.printNotes(container);
        input.value = '';
    });
})();




