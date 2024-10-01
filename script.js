document.addEventListener("DOMContentLoaded", function() {
    fetch('20240924s.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = marked(text);
        });
});