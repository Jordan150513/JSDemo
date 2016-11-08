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

var currentCat;
var circleArr = [[],[],[],[],[],[],[],[],[]];

function circleClicked(event){
  if (event.target.getCircleType() != 3){
    //不是猫
    event.target.setCircleType(2);
  }

  if (currentCat.indexX==0||currentCat.indexX==8||currentCat.indexY==0||currentCat.indexY==8){
    alert("游戏结束");
  }

  var leftCircle = circleArr[currentCat.indexX-1,currentCat.indexY];
  var rightCircle = circleArr[currentCat.indexX,currentCat.indexY+1];
  var leftTopCircle = circleArr[currentCat.indexX,currentCat.indexY-1];
  var rightTopCircle = circleArr[currentCat.indexX+1,currentCat.indexY-1];
  var leftBottomCircle = circleArr[currentCat.indexX,currentCat.indexY+1];
  var rightBobbtomCircle = circleArr[currentCat.indexX+1,currentCat.indexY+1]

  if (leftCircle.getCircleType() ==1){
    leftCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = leftCircle;
  }else if (rightCircle.getCircleType() ==1){
    rightCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = rightCircle;
  }else if (leftTopCircle.getCircleType() ==1){
    leftTopCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = leftTopCircle;
  }else if (rightTopCircle.getCircleType() ==1){
    rightTopCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = rightTopCircle;
  }else if (leftBottomCircle.getCircleType() ==1){
    leftBottomCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = leftBottomCircle;
  }else if (rightBobbtomCircle.getCircleType() ==1){
    rightBobbtomCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = rightBobbtomCircle;
  }
}

function addCiecles(){

  for (var indexY = 0;indexY<9;indexY++){
    for (var indexX = 0;indexX<9;indexX++){
      var  c = new Circle();
      gameView.addChild(c);
      circleArr[indexX][indexY] = c;
      c.x = indexY%2?indexX*55+25:indexX*55;
      c.y = indexY*55;
      if (indexX==4&&indexY==4){
        c.setCircleType(3);//是猫
        currentCat = c;
      }
      c.addEventListener("click",circleClicked);
    }
  }
}

addCiecles();