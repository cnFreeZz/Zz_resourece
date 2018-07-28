//管理index
(function($,root){
    var ControlManager = function (length){
        this.index = 0;
        this.length = length;
        console.log(this.length);
    };
    ControlManager.prototype = {
        next:function(){
            return this.getIndex(1);
        },
        prev:function(){
            return this.getIndex(-1);
        },
        getIndex:function(val){
            var index = this.index,
                length = this.length,
                curIndex = (index + val + length) % length;
            // index = 0 1 2, length = 3 
            // console.log(this.length);
            this.index = curIndex;
            return curIndex;
            // console.log(val);
        }
    };
    root.ControlManager = ControlManager;
}(window.zepto,window.player||(window.player={})));