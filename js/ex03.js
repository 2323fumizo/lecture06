function pickFortuneShip(){
  var a;
  a = Math.random();
  console.log(a);
  if(a <=0.5){
    return "大吉";
  }else if(a <=0.7){
    return "中吉";
  }else if(a<=0.9){
    return "吉";
  }else if(a<=0.97){
    return "凶";
  }else{
    return "大凶";
  }
}
