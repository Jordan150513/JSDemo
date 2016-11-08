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

function circleClicked(event){
  if (event.target.getCircleType() == 1){
    //不是猫并且不是已经走过的位置,能跳的位置
    event.target.setCircleType(2);
  }
                      //这里书写格式错误
  var leftCircle = circleArr[currentCat.indexX-1][currentCat.indexY];
  var rightCircle = circleArr[currentCat.indexX+1][currentCat.indexY];
  var leftTopCircle = circleArr[currentCat.indexX][currentCat.indexY-1];
  var rightTopCircle = circleArr[currentCat.indexX-1][currentCat.indexY-1];
  var leftBottomCircle = circleArr[currentCat.indexX][currentCat.indexY+1];
  var rightBobbtomCircle = circleArr[currentCat.indexX-1][currentCat.indexY+1]
//alert(leftCircle.getCircleType());
  //以下逻辑需要优化---------

  var tmpCircleArr = [];
  //alert(tmpCircleArr.count);
  if (leftCircle.getCircleType() == 1){
    tmpCircleArr.push(leftCircle);
  }
  if (rightCircle.getCircleType() == 1){
    tmpCircleArr.push(rightCircle);
  }
  if (leftTopCircle.getCircleType() == 1){
    tmpCircleArr.push(leftTopCircle);
  }
  if (rightTopCircle.getCircleType() == 1){
    tmpCircleArr.push(rightTopCircle);
  }
  if (leftBottomCircle.getCircleType() == 1){
    tmpCircleArr.push(leftBottomCircle);
  }
  if (rightBobbtomCircle.getCircleType() == 1){
    tmpCircleArr.push(rightBobbtomCircle);
  }
  if (tmpCircleArr.length==0||!tmpCircleArr.length)
  var tmpIndex = Math.floor(tmpCircleArr.length*Math.random());
 var tmpCircle = tmpCircleArr[tmpIndex];
  tmpCircle.setCircleType(3);
  currentCat.setCircleType(1);
  currentCat = tmpCircleArr[tmpIndex];

  //if (leftCircle.getCircleType() == 1){
  //  leftCircle.setCircleType(3);
  //  currentCat.setCircleType(1);
  //  currentCat = leftCircle;
  //}else if (rightCircle.getCircleType() == 1){
  //  rightCircle.setCircleType(3);
  //  currentCat.setCircleType(1);
  //  currentCat = rightCircle;
  //}else if (leftTopCircle.getCircleType() == 1){
  //  leftTopCircle.setCircleType(3);
  //  currentCat.setCircleType(1);
  //  currentCat = leftTopCircle;
  //}else if (rightTopCircle.getCircleType() == 1){
  //  rightTopCircle.setCircleType(3);
  //  currentCat.setCircleType(1);
  //  currentCat = rightTopCircle;
  //}else if (leftBottomCircle.getCircleType() == 1){
  //  leftBottomCircle.setCircleType(3);
  //  currentCat.setCircleType(1);
  //  currentCat = leftBottomCircle;
  //}else if (rightBobbtomCircle.getCircleType() == 1){
  //  rightBobbtomCircle.setCircleType(3);
  //  currentCat.setCircleType(1);
  //  currentCat = rightBobbtomCircle;
  //}else {
  //  alert("成功啦!")
  //}
  //优化结束---------
  if (currentCat.indexX==0||currentCat.indexX==8||currentCat.indexY==0||currentCat.indexY==8){
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