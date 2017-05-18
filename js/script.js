var timer = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        $("#relateArticle").html($(".hatena-module-related-entries").html());
        clearInterval(timer);
    }
}, 1000);