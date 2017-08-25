'use strict';
SystemJS.import('thumb-compile.js').then(function(m){
    let main = document.getElementById('main');
    let thumb = new m.default();
    main.addEventListener('click', function () {
        thumb.thumbsUp();
    });
});


