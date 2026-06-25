document.addEventListener('DOMContentLoaded', function () {
    // Fade images in as they load
    document.querySelectorAll('img').forEach(function (img) {
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            img.addEventListener('load', function () {
                this.style.opacity = '1';
            });
        }
    });

    // Reading progress bar on post pages
    if (window.location.pathname.indexOf('/posts/') !== -1) {
        var bar = document.createElement('div');
        bar.style.cssText = 'position:fixed;top:0;left:0;width:0%;height:2px;background:#000;z-index:100;';
        document.body.appendChild(bar);
        window.addEventListener('scroll', function () {
            var total = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0) + '%';
        });
    }
});

// Smooth scroll for in-page anchor links
document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        e.preventDefault();
        var el = document.getElementById(href.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
