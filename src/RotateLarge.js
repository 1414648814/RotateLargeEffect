/**
 * Author: George1994(wangdading)
 * CreateTime: 16/6/6.
 * Description: 实现旋转后放大的效果
 */


var WDUIView = cc.Sprite.extend({

    ctor : function(){
        this._super();

    },

    touchEnabled : function() {


    },

    onTouchBegan : function(touches, event) {

    },

    onTouchMoved : function(touches, event) {
        
    },

    onTouchEnded : function(touches, event){

    },

    /**
     * 创建半透明层，覆盖弹窗下方的场景
     * @param {Number} [opacity]
     */
    buildTransparentLayer: function(opacity) {
        if(opacity == null) {
            opacity = 150;
        }

        if(this._w_transparent) {
            this._w_transparent.removeFromParent(true);
            this._w_transparent = null;
        }

        this._w_transparent = new cc.LayerColor(cc.color(0, 0, 0, opacity));
        this._w_transparent.ignoreAnchorPointForPosition(false);
        this._w_transparent.setAnchorPoint(0.5, 0.5);
        this._w_transparent.setPosition(this.center());
        this.addChild(this._w_transparent, -1);
    },

    _w_transparent: null
});



var WDUIEightImmortalMain = WDUIView.extend({
    ctor : function() {
        this._super();
        this.initUI();
    },

    initUI :function(){
        var middleBg = new cc.Sprite;
        middleBg.setContentSize(816, 342);
        middleBg.setAnchorPoint(0.5, 0.5);
        middleBg.setPosition(this.getWidth() * 0.5, this.getHeight() * 0.5);
        this.addChild(middleBg);
        this._middleBg = middleBg;

        for (var i = 0; i < 8; i++) {
            var item = new WDUIEightImmortalRoleItem();
            item.setTag(i);
            item.setAnchorPoint(0.5, 0.5);
            item.setPosition(66 + i*98, 171);
            middleBg.addChild(item);
        }

    },

    _middleBg: null,

});

var WDUIEightImmortalRoleItem = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.setContentSize(132, 342);

        this.initUI();
    },

    initUI: function() {
        var roleImg = cc.Sprite.create("人物/暗/何仙姑.png");
        roleImg.setAnchorPoint(0.5, 0.5);
        roleImg.setPosition(this.getWidth() * 0.5, this.getHeight() * 0.5);
        //roleImg.bindClick(this.eventRole.bind(this));
        //roleImg.setTouchArea(18, 14, 130, 344);
        this.addChild(roleImg);
        this._roleImg = roleImg;
    },

    eventRole: function() {


    },

});