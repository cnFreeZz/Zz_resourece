//渲染页面
(function($,root){
    var $scope = $(document.body);
    //渲染歌曲信息
    function renderInfo(info){
        var html = '<h1 class="song-name">'+info.song+'</h1>'+
                   '<h3 class="singer-name">'+info.singer+'</h3>'+
                   '<h3 class="album-name">'+info.album+'</h3>';
        $scope.find('.song-info').html(html);//选出song-info节点
    }
    //渲染图片
    function renderImageBg(src){
        var image = new Image();
        image.onload = function (){
            //渲染封面图片
            $scope.find('.song-img .img-wrapper img').attr('src',src);
            root.blurImg(image,$scope);
        }
        image.src = src;  
    }
    //渲染收藏按钮
    function renderLikeBtn (islike){
        if(islike){
            $scope.find('.like-btn').addClass('liked');
        }else{
            $scope.find('.like-btn').removeClass('liked');
        }
    }

    root.render = function(data){ 
        // console.log(1);
        renderInfo(data);
        renderImageBg(data.image);
        renderLikeBtn(data.islike);
    };
}(window.Zepto,window.player||(window.player={})));