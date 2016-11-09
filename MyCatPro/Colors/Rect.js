/**
 * Created by qiaodandan on 2016/11/9.
 */
function Rect(n,color,onlyColor){
  createjs.Shape.call(this);
  this.setRectType = function(type){
    this._rectType = type;
    switch (type){
      case 1:
        this.setRectColor(color);
        break;
      case 2:
        this.setRectColor(onlyColor);
        break;
    }
  }

  this.setRectColor = function(colorStr){
    this.graphics.beginFill(colorStr);
    this.graphics.drawRect(0,0,400/n-5,400/n-5);
    this.graphics.endFill();
  }
  this.getRectType = function(){
    return this._rectType;
  }
  this.setRectType(1);
}
Rect.prototype = new createjs.Shape();