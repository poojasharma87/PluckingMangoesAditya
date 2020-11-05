class tree {
    constructor(x,y) {
      var options = {
         isStatic:true
      }
     
    this.body =Bodies.rectangle(x,y,0,0,options);
      this.Image=loadImage("tree.png");
      
    
      World.add(world,this.body);

    }
    display(){
      
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
   
     
      imageMode(CENTER);
      image(this.Image,0,0,400,400);
      pop();
    }
  };