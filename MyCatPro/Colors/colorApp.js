/**
 * Created by qiaodandan on 2016/11/9.
 */
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();
stage.addChild(gameView);

var n = 2;
function addRects(){

  //取两个颜色的算法,还需要优化-----难度算法的重写----
  var cl = parseInt(Math.random()*1000000)
  var color = "#"+cl;
  var cl2 = parseInt(Math.random()*1000000)
  var onlyColor = "#"+cl2;
  var x = parseInt(Math.random()*n);
  var y = parseInt(Math.random()*n);
//取两个颜色的算法,还需要优化---------

  for (var indexX = 0;indexX<n;indexX++){
    for (var indexY = 0;indexY<n;indexY++){
      var r = new Rect(n,color,onlyColor);
      gameView.addChild(r);
      r.indexX = indexX;
      r.indexY = indexY;
      if (r.indexX == x && r.indexY == y){
        r.setRectType(2);
      }
      r.x = indexX*400/n;
      r.y = indexY*400/n;
      if (r.getRectType() == 2){
        r.addEventListener("click",function(){
          if (n<7){
            n++;
            gameView.removeAllChildren();
            addRects();
          }
        })
      }
    }
  }
}
addRects();



//var s = new createjs.Shape();
//s.graphics.beginFill("#FF0000");
//s.graphics.drawRect(0,0,100,100);
//s.graphics.endFill();
//
//gameView.addChild(s);
