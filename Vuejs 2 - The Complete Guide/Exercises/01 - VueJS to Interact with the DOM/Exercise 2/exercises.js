var app = new Vue({
    el: "#app",
    data: {
        value: ""
    },
    methods: {
        buttonClick: function () {
            alert('O botão foi clicado');
        },
    }
});