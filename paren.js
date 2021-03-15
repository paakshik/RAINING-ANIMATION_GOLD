
class Parent{

constructor(x,y,width,height){
var describer = {

restitution: 0.00000000000000000000000000001,
friction: 0.1,
isStatic:false
}
this.image = image;
this.width = width;
this.height =  height;
this.visibility = 255;

this.body = Bodies.circle(x,y, width,describer);
World.add(world, this.body)
}

show() {
push(); 
translate(this.body.position.x,this.body.position.y);
rectMode(CENTER);
fill('cyan');
noStroke();
ellipse(0,0, this.width);
    
pop();
}
move(){
    if (this.body.position.y > 650){
        Body.setPosition(this.body,{x:random(0,780),y:random(-1000,100)})

    }
}
   
}