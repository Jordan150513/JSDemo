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
  //随机的没有问题,但是并没有随着难度的增加,颜色慢慢相近的效果
  var cl = getRandomColorNO();
  var color = "#"+cl;

  var cl2 = getOnlyColor(n,cl);
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
  //根绝难度等级返回 the only color
  function getOnlyColor(n,color){
   var onlyColorNo;
    switch (n){
      case 2:
        onlyColorNo = getRandomColorNO();
        break;
      case 3:
        onlyColorNo = getAfterChangeColor(color,5);
        break;
      case 4:
        onlyColorNo = getAfterChangeColor(color,4);
        break;
      case 5:
        onlyColorNo = getAfterChangeColor(color,3);
        break;
      case 6:
        onlyColorNo = getAfterChangeColor(color,2);
        break;
      default:
        onlyColorNo = getAfterChangeColor(color,1);
        break;
      }
    return onlyColorNo;
  }

//更改已存在颜色No的某几个位,得到另外一个颜色NO
  function getAfterChangeColor(color,n){
    for (var i = 0;i < n;i++){
      var index = getRandomIndexNo();
      var newNo = getRandomNo();
      //color = color.split("");//split方法找不到
      //color.slice(index,1,newNo);
      //console.log(color);
      //color.join("");
      color = replacePos(color,index,newNo);
    }
    return color;
  }
  function replacePos(strObj, pos, replacetext)
  {
    var str = strObj.substr(0, pos-1) + replacetext + strObj.substring(pos, strObj.length);
    return str;
  }
//重新获取一个随机颜色
  function getRandomColorNO(){
    //第一种
    return Math.floor(0x1000000+Math.random()*0x1000000).toString(16).slice(1);
    //第二种
    //(~~(Math.random()*(1<<24))).toString(16);
  }
  //获取一个更改颜色的颜色indexNO
  function getRandomIndexNo(){
    //可能为0,但总是小于1,所以要四舍五入处理,即可以取得正确范围闭区间[0,6]了
    return parseInt(Math.random()*6);
  }
  //获取一个随机的16进制数字
  function getRandomNo(){
    return Math.floor(0x10+Math.random()*0x10).toString(16).slice(1);
  }
}
addRects();



//var s = new createjs.Shape();
//s.graphics.beginFill("#FF0000");
//s.graphics.drawRect(0,0,100,100);
//s.graphics.endFill();
//
//gameView.addChild(s);
