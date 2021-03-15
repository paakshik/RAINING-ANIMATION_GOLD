class Ground  {

    constructor(x,y,width,height,image){


    this.width = width;
    this.height =  height;
this.image =image;
    this.body = Bodies.circle(x,y,this.width,{isStatic: true});
    World.add(world,this.body)
}

    show(){
  
        let Angle = this.body.angle;
    push();
  
    imageMode(CENTER);
fill('black')
    ellipse(this.body.position.x,this.body.position.y, this.width, this.height);
    pop();

    }
    }