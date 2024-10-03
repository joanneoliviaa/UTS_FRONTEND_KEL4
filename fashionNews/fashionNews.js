// Asc and dsc funtion
document.getElementById('sort-asc').addEventListener('click', function(event){
    event.preventDefault(); 
    sortItems('asc');
});

document.getElementById('sort-desc').addEventListener('click', function(event){
    event.preventDefault(); 
    sortItems('desc');
});

function sortItems(order) {
    var container = document.querySelector('.grid-container');
    var items = Array.from(container.getElementsByClassName('news-item'));

    items.sort(function(a, b) {
        var titleA = a.querySelector('h3').innerText.toLowerCase();
        var titleB = b.querySelector('h3').innerText.toLowerCase();

        if (order === 'asc') {
            return titleA.localeCompare(titleB); 
        } else {
            return titleB.localeCompare(titleA); 
        }
    });

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    items.forEach(function(item) {
        container.appendChild(item);
    });
}

// 

window.onload = function() {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// event
var eventDate = new Date("Dec 31, 2024 12:00:00").getTime();
    
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = eventDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Event has started!";
    }
}, 1000);

