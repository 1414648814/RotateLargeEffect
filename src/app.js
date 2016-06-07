
var PADDLE_STATE_GRABBED = 0;
var PADDLE_STATE_UNGRABBED = 1;

var HelloWorldLayer = cc.Layer.extend({

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;
        cc.eventManager.addListener({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : this.onTouchBegan,
            onTouchMoved : this.onTouchMoved,
            onTouchEnded : this.onTouchEnded

        },this);
        this.initUI();

        return true;
    },

    initUI :function(){

        for (var i = 0; i < 8; i++) {
            var item = new WDUIEightImmortalRoleItem();
            item.setTag(i);
            item.setAnchorPoint(0.5, 0.5);
            item.setPosition(66 + i*98, cc.director.getWinSize().height/2);
            this.addChild(item);
        }
    },

    onTouchBegan : function(touches, event) {
        for (var i = 0;i < 8;i++){
            var target = this.getChildByTag(i);
            if (target.getBoundingBox() .containsTouchLocation(touches)){
                var goal = new cc.Sprite("res/人物/亮/何仙姑.png");
                goal.setAnchorPoint(0.5,0.5);
                goal.setPosition(target.getPosition());
                goal.setScale(0.1);
                var rotate = cc.rotateTo(2,720);
                var large = cc.scaleTo(2,1);
                var spawn = cc.spawn(rotate,large);
                goal.runAction(spawn);
                return true;
            }
        }
        return false;
    },

    onTouchMoved : function(touches, event) {

    },

    onTouchEnded : function(touches, event){

    },

    rect:function () {
        return cc.rect(-this._rect.width / 2, -this._rect.height / 2, this._rect.width, this._rect.height);
    },

    containsTouchLocation : function(touches){
        var getPoint = touches.getLocation();
        var myRect = this.rect();
        myRect.x = this.x;
        myRect.y = this.y;

        return cc.rectContainsRect(myRect,getPoint);
    },

    getCurrentTarget : function(tag){

    },

});

var WDUIEightImmortalRoleItem = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.setContentSize(132, 342);

        this.initUI();
    },

    initUI: function() {
        var roleImg = new cc.Sprite("res/人物/暗/何仙姑.png",cc.rect(18, 14, 130, 344));
        roleImg.setAnchorPoint(0.5, 0.5);
        roleImg.setPosition(this.getContentSize().width/2,this.getContentSize().height/2);
        this.addChild(roleImg);
    },

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

