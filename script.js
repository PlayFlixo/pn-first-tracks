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

function openGame(url) {
    var win;

    if (url) {
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.scrolling="no"
            iframe.src = url;
            win.document.body.appendChild(iframe);

            var interval = setInterval(function() {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
        }
    }
}

