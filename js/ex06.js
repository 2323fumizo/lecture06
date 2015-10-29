function chooseRandomStrokeColor(){
  var red,green,blue,alpha;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  alpha = Math.floor(Math.random() * 256);
  stroke(red, green, blue, alpha);
  //fill(red, green, blue, alpha);
  line(10,10,100,100);
  //rect(10,10,100,100);
}
