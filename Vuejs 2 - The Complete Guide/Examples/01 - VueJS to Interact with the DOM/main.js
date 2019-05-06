var app = new Vue({
    el: "#app",

    data: {
        word: "Change me :P",
        title: "Hello Vue.js :D",
        link: "http://www.google.pt",
        finishedLink: '<a href="http://www.google.pt">Google</a>',
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,
        name: "Max",
        attachRed: false,
        color: "gray",
        width: 100

    },

    computed: {
        output: function () {
            console.log('computed');
            return this.counter > 5 ? "Greater 5" : "Smaller 5"
        },
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        },
        myStyle: function () {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }
    },

    watch: {
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 2000);
        }
    },

    methods: {
        changeWord: function (event) {
            this.word = event.target.value;
        },

        sayHello: function () {
            this.title = "hello!";
            return this.title;
        },

        increase: function (step, event) {
            this.counter += step;
        },

        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        alertMe: function () {
            alert('Este Alerta aparece porque carregaste no Enter ou no Espaço');
        },

        result: function () {
            console.log('methods');
            return this.counter > 5 ? "Greater 5" : "Smaller 5"
        }
    }
});