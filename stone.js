class stone
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		
		this.radius=radius;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(x, y, this.radius, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			
			fill(255,0,255)
			imageMode(CENTER);
			
			image(this.image, 0,0,this.radius, this.radius)
			pop()
			
	}

}