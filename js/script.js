Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        elements: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            
        ],
        currentPic: 0,
        timer: null,
    },
    methods: {
        prevSlide: function(){
            //modificare l'indeice dell'immagine corrente
            this.currentPic = this.currentPic === 0 ? this.currentPic = (this.elements.length - 1) : this.currentPic - 1;
        },
        
        nextSlide: function(){
            this.currentPic = this.currentPic === (this.elements.length - 1) ? this.currentPic = 0 : this.currentPic + 1;
        },
        
        makeActive: function(index){
            this.currentPic = index;
        },

        startTimer: function(){
            timer = setInterval(this.nextSlide, 3000);
        },

        stopTimer: function(){
            clearInterval(timer);
        },

        resetTimer: function(){
            console.log('restart timer')
            this.stopTimer();
            this.startTimer();
        },
    },
    created: function(){
        this.startTimer();
    }
});