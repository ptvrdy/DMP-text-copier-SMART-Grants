// Copy Button Functionality
function copyText(event) {
    var button = event.target;
    var paragraph = button.previousElementSibling;
    var textToCopy = paragraph.innerText;

    navigator.clipboard.writeText(textToCopy).then(function() {
        button.innerHTML = '<i class="fa fa-clone" aria-hidden="true"></i> Copied!';
        setTimeout(function() {
            button.innerHTML = '<i class="fa fa-clone" aria-hidden="true"></i> Copy';
        }, 2000);
    });
}

window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('.copy-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', copyText)
    });
});