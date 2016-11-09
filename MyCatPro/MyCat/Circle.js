/**
 * Created by qiaodandan on 2016/11/8.
 */
function Circle(){

  createjs.Shape.call(this);

  this.setCircleType = function(type) {
    this._circleType = type;
    switch (type) {
      case 1:
        this.setColor("#cccccc");
        break;
      case 2:
        this.setColor("#FF0000");
        break;
      case 3:
        this.setColor("#0000FF");
        break;
    }
  }

  this.setColor = function(colorStr){
    this.graphics.beginFill(colorStr);
    this.graphics.drawCircle(0,0,25);
    this.graphics.endFill();
  }

  this.getCircleType = function(){
    return this._circleType;
  }

  this.setCircleType(1);
}
Circle.prototype = new createjs.Shape();
