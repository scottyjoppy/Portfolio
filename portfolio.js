const title = document.querySelectorAll('.title');
const pageLink = document.querySelectorAll('.page-link');

title.addEventListener('mouseenter', function() {
    pageLink.classList.add('visible');
    alert('Hello, World!');
});

function visibilitySwitch () {
    pageLinks.forEach(link => {
        if (link.style.visibility === 'hidden') {
            link.style.visibility = 'hidden';
        } else {
            link.style.visibility = 'visible';
        }
    });
}
