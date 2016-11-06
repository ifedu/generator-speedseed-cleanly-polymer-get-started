Polymer({
    is: 'icon-toggle-demo',

    message: (fav) =>
        (fav)
            ? 'You really like me!'
            : 'Do you like me?'
});