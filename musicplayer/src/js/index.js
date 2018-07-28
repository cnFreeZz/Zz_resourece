var $ = window.Zepto;
var $scope = $(document.body); 
var dataUrl = '/mock/data.json';
var player = window.player;
var render = player.render;
var songList;
var controlManager;
var audioPlayer = new player.AudioPlayer();
// var index = 0;
// console.log(render);

// console.log(player);

// 绑定自定义事件
$scope.on('player:change',function(e,index){
    var curData = songList[index];
    render(curData);
    audioPlayer.setAudioSource(curData.audio);
    if(audioPlayer.status === 'play'){
        audioPlayer.play();
    }
});


// 绑定点击事件
$scope.on('click','.prev-btn',function (){
    // if(index === 0){
    //     index = songList.length - 1;
    // }else{
    //     index--;
    // }
    var index = controlManager.prev();
    $scope.trigger('player:change',index);
    // render(songList[index]);
});
$scope.on('click','.next-btn',function (){
    // if(index === songList.length - 1){
    //     index = 0;
    // }else{
    //     index++;
    // }
    var index = controlManager.next();
    $scope.trigger('player:change',index);
    // render(songList[index]);
});
$scope.on('click','.play-btn',function (){
    // console.log(1);
    $(this).toggleClass('playing');
    if(audioPlayer.status === 'pause'){
        audioPlayer.play();
    }else{
        audioPlayer.pause();
    }
})

//数据请求
function getData(url,cb) {
    $.ajax({
        url:url,
        type:"GET",
        success:cb,
        error:function(e){
            alert(e);
        }
    });
}

//成功回调函数
function successCb (data){
    // console.log(data);
    songList = data;
    // console.log(songList.length);
    controlManager = new player.ControlManager(songList.length);
    
    $scope.trigger('player:change',0);
}
getData(dataUrl,successCb);

