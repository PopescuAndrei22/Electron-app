const note_title_el = document.getElementById('noteTitle');
const note_content_el = document.getElementById('noteContent');
const note_submit_el = document.getElementById('noteSubmit');

note_submit_el.addEventListener('click', () => {
    const title = note_title_el.value;
    const content = note_content_el.value;

    const res = api.createNote({
        title,
        content
    })

    console.log(res);

    note_title_el.value = "";
    note_content_el.value = "";
})