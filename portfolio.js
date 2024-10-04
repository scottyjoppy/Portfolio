const titles = document.querySelectorAll('.title');
const pageLinks = document.querySelectorAll('.link-container');

titles.forEach(title => {
    title.addEventListener('mouseenter', function() {
        pageLinks[0].classList.add('visible');
    });    
})


function visibilitySwitch () {
    pageLinks.forEach(link => {
        if (link.style.visibility === 'hidden') {
            link.style.visibility = 'hidden';
        } else {
            link.style.visibility = 'visible';
        }
    });
}
