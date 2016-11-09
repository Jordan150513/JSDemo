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
function circleClicked(event){
  if (event.target.getCircleType() == 1){
    //不是猫并且不是已经走过的位置,能跳的位置
    event.target.setCircleType(2);
  }

  var leftCircle = circleArr[currentCat.indexX-1][currentCat.indexY];
  var rightCircle = circleArr[currentCat.indexX+1][currentCat.indexY];

  var leftBottomCircle = circleArr[currentCat.indexX][currentCat.indexY+1];
  var leftTopCircle = circleArr[currentCat.indexX][currentCat.indexY-1];

  var rightTopCircleOU = circleArr[currentCat.indexX-1][currentCat.indexY-1];
  var rightBobbtomCircleOU = circleArr[currentCat.indexX-1][currentCat.indexY+1]

  var rightTopCircleJS = circleArr[currentCat.indexX+1][currentCat.indexY-1];
  var rightBobbtomCircleJS = circleArr[currentCat.indexX+1][currentCat.indexY+1]

//alert(leftCircle.getCircleType());

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
  if (leftBottomCircle.getCircleType() == 1){
    tmpCircleArr.push(leftBottomCircle);
  }
  if(currentCat.indexY%2==0){
    //偶数行
    if (rightTopCircleOU.getCircleType() == 1){
      tmpCircleArr.push(rightTopCircleOU);
    }
    if (rightBobbtomCircleOU.getCircleType() == 1){
      tmpCircleArr.push(rightBobbtomCircleOU);
    }
  }else {
    //奇数行
    if (rightTopCircleJS.getCircleType() == 1){
      tmpCircleArr.push(rightTopCircleJS);
    }
    if (rightBobbtomCircleJS.getCircleType() == 1){
      tmpCircleArr.push(rightBobbtomCircleJS);
    }
  }

  if (tmpCircleArr.length!=0){
    var tmpIndex = Math.floor(tmpCircleArr.length*Math.random(1));
    var tmpCircle = tmpCircleArr[tmpIndex];
    tmpCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = tmpCircleArr[tmpIndex];
    stepNo = stepNo + 1;
  }else {
    alert("你赢了!一共用了"+(stepNo+1)+"步!");
  }

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