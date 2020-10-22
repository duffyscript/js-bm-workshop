// jQuery
$.ajax({
    url: "data.json"
}).done(function(data) {
    // ...
}).fail(function() {
    // ...
});

// Vanilla JS
fetch("data.json")
    .then(data => {
        // ...
    }).catch(error => {
        // ...
});