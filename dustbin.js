class Dust{
  constructor (x,y,width,height){
      var options  = {
       isStatic : true,
       restitution : 0.3
      }

  this.x=x;
  this.y=y;
  this.width=width;
  this.height = height;
  this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
  this.image = loadImage("dustbingreen.png");
  
  
  World.add(world,this.body);
  }
  
  display()
  {
      var dp = this.body.position;
  
      push()
      translate(dp.x,dp.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,150);
      pop()
  }
  
  }
 



