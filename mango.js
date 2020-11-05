class mango{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		
		this.radius=radius;
		this.image=loadImage("mango.png");
		this.body=Bodies.circle(x, y, 10, options);
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		
		imageMode(CENTER);
		
		image(this.image, pos.x,pos.y,this.radius, this.radius)
		//pop()
 }
}
