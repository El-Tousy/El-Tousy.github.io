// Galerie: entfernt automatisch Bilder, die (noch) nicht existieren, und baut Pfeile + Punkte.
(function () {
    var gallery = document.querySelector('.gallery');
    if (!gallery) return;
    var track = gallery.querySelector('.gallery-track');
    var dotsBox = gallery.querySelector('.gallery-dots');
    var imgs = Array.prototype.slice.call(track.querySelectorAll('img'));

    function ready(img) {
        return new Promise(function (resolve) {
            if (img.complete) return resolve();
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
        });
    }

    Promise.all(imgs.map(ready)).then(function () {
        Array.prototype.slice.call(track.querySelectorAll('.slide')).forEach(function (s) {
            var i = s.querySelector('img');
            if (!i || !i.naturalWidth) s.remove();
        });

        var slides = track.querySelectorAll('.slide');
        var n = slides.length;
        if (n === 0) { gallery.classList.add('empty'); return; }
        if (n === 1) gallery.classList.add('single');

        var index = 0;
        var dots = [];
        for (var k = 0; k < n; k++) {
            (function (k) {
                var d = document.createElement('button');
                d.className = 'gallery-dot';
                d.setAttribute('aria-label', 'Bild ' + (k + 1));
                d.addEventListener('click', function () { go(k); });
                dotsBox.appendChild(d);
                dots.push(d);
            })(k);
        }

        function go(i) {
            index = (i + n) % n;
            track.style.transform = 'translateX(-' + (index * 100) + '%)';
            dots.forEach(function (d, j) { d.classList.toggle('active', j === index); });
        }
        gallery.querySelector('.prev').addEventListener('click', function () { go(index - 1); });
        gallery.querySelector('.next').addEventListener('click', function () { go(index + 1); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') go(index - 1);
            if (e.key === 'ArrowRight') go(index + 1);
        });
        go(0);
    });
})();