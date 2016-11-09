/**
 * Created by qiaodandan on 2016/11/8.
 */
//var stage = new createjs.Stage("gameView");
//
//var gameView = new createjs.Container();
//stage.addChild(gameView);
//
//var s = new createjs.Shape();
//s.graphics.beginFill("#FF0000");
//s.graphics.drawCircle(50,50,25);
//s.graphics.endFill();
//gameView.addChild(s);
//
//createjs.Ticker.setFPS(30);
//createjs.Ticker.addEventListener("tick",stage);

var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

var circleArr = [[],[],[],[],[],[],[],[],[]];
var currentCat;
var stepNo = 0;

function randomNextStep(circle) {
  var randomNextStepX = -1, randomNextStepY = -1;
  do {
    randomNextStepX = circle.indexX + Math.floor(Math.random() * 2 - 1);
    randomNextStepY = circle.indexY + Math.floor(Math.random() * 2 - 1);
  } while ( randomNextStepX < 0 || randomNextStepY < 0
         || randomNextStepX > 8 || randomNextStepY > 8
         || (randomNextStepX == circle.indexX && randomNextStepY == circle.indexY)
         || ((circle.indexY % 2 == 0) && randomNextStepY != circle.indexY && randomNextStepX > circle.indexX)
         || ((circle.indexY % 2 != 0) && randomNextStepY != circle.indexY && randomNextStepX < circle.indexX)
         || (circleArr[randomNextStepX][randomNextStepY].getCircleType() == 2) );
  if ( randomNextStepX < 0 || randomNextStepY < 0) return null;
  stepNo = stepNo + 1;
  return circleArr[randomNextStepX][randomNextStepY];
}

function circleClicked(event){
  if (event.target.getCircleType() == 1){
    event.target.setCircleType(2);
  }

  var nextCircle = randomNextStep(currentCat);
  if (nextCircle) {
    nextCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = nextCircle;
  } else {
    alert("你赢了!一共用了"+(stepNo+1)+"步!");
  }

  if (currentCat.indexX == 0 || currentCat.indexX == 8 || currentCat.indexY == 0 || currentCat.indexY ==8){
    alert("游戏结束,你输了!");
  }
}

function addCiecles(){

  for (var indexY = 0;indexY < 9;indexY ++){
    for (var indexX = 0;indexX < 9;indexX ++){
      var  c = new Circle();
      gameView.addChild(c);
      circleArr[indexX][indexY] = c;
      c.indexX = indexX;
      c.indexY = indexY;//忘记了这里
      c.x = indexY % 2 ? indexX * 55 + 25 : indexX * 55;
      c.y = indexY * 55;
      if (indexX == 4 && indexY == 4){
        c.setCircleType(3);//是猫
        currentCat = c;
      }
      c.addEventListener("click",circleClicked);
    }
  }
}

addCiecles();