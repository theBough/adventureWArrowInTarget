
function Arrow(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.show = true;
  this.col = 200;
  this.inTarget = false;
  var offsetY

  this.display = function(target) {
    if (room == 5 && this.show) {
      stroke(10);
      fill(this.col);
      rect(this.x, this.y, this.w, this.h);
      if(this.inTarget){
        this.y = target.y + offsetY;
      }
    }
  }
  this.reset = function(){
    this.inTarget = false;
  }

  this.shoot = function(target) {
    if (room == 5) {
      
      if(this.x > target.x && this.x < target.x + target.w && this.y > target.y && this.y + this.h < target.y + target.h){
        this.inTarget = true;
        
        offsetY = this.y - target.y 
        this.y = target.y + offsetY;
        if(activeArrow <2){
          activeArrow += 1;  
        }
        shootArrow = false;
      }else{
        this.x -= 3;
      }
      if(this.x < 5){
        this.show = false;
        if(activeArrow <2){
          activeArrow += 1; 
          shootArrow = false;
        }
        
      }
      
    }
  }
  this.reload = function(){
    shootArrow = false;
    this.show = true;
    this.x = x;
    this.y = y;
  }
}
