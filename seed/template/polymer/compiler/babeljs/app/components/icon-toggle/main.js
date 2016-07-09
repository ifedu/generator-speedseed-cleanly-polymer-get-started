Polymer({
    is: 'icon-toggle',

    properties: {
        toggleIcon: String,

        pressed: {
            notify: true,
            reflectToAttribute: true,
            type: Boolean,
            value: false
        }
    },

    listeners: {
        tap: 'toggle'
    },

    toggle() {
        this.pressed = !this.pressed
    }
})