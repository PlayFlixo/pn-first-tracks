function changeFaviconAndTitle(faviconUrl, title) {
    // Change favicon
    var favicon = document.querySelector('link[rel="icon"]');
    favicon.href = faviconUrl;

    // Change tab title
    document.title = title;
}

var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        dropdown.classList.toggle('open');
    });
});
