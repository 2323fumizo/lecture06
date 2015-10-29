function drawLot(){
  var drawLot = Math.random();
  if (drawLot >= 0.7){
    return "あたり";
  }else{
    return "はずれ";
  }
}
