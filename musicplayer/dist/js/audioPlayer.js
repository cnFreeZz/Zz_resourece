(function ($,root){
    var AudioPlayer = function (){
        this.audio = new Audio();
        this.status = 'pause';
    };
    AudioPlayer.prototype = {
        play:function (){
            this.audio.play();
            this.status = 'play';
        },
        pause:function (){
            this.audio.pause();
            this.status = 'pause';
        },
        setAudioSource:function (src){
            this.audio.src = src;
            this.audio.load();
        }
    };
    root.AudioPlayer = AudioPlayer;
}(window.zepto,window.player||(window.player = {})));