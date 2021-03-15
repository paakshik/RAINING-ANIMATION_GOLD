
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
dropG = [];
let randomiser1;
let readFrame;
function preload()
{
	man = loadImage('depositphotos_284491816-stock-illustration-cartoon-character-person-holding-color-removebg-preview.png')
light = loadImage('download-removebg-preview.png')
cloud = loadImage('download__15_-removebg-preview.png')
car1 = loadImage('istockphoto-186817186-612x612-removebg-preview.png')
car2 = loadImage('p-3d-psd3d2-car-jj-0053-l-removebg-preview.png')
man2 = loadImage('depositphotos_284491688-stock-illustration-cartoon-character-old-person-holding-removebg-preview.png')
man3 = loadImage('depositphotos_284491578-stock-illustration-cartoon-character-person-holding-red-removebg-preview.png')
man4 = loadImage('depositphotos_308144852-stock-illustration-beard-man-blue-umbrella-icon-removebg-preview.png')
thunderS = loadSound('ThunderClap4HvyC SDT2042602.mp3')
rainS = loadSound('zapsplat_nature_rain_med_heavy_on_street_and_roof_industrial_estate_light_traffic_pass_occ_63304.mp3')
vehicleS = loadSound('VEHCar_Car on a road (ID 1286)_BSB.wav')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 
 car = createSprite(-120,680,50,50)	
 car.addImage(car1);
 car.scale =0.5;
 car3= createSprite(750,680,50,50);
 car3.addImage(car2);
 car3.scale =0.5;
 rainS.play();
 vehicleS.play();
 umbrella = new Ground(300,600,33,370,man);
 umbrella2 = new Ground(400,600,33,370,man);
 umbrella3 = new Ground(500,600,33,370,man);
 umbrella4= new Ground(600,600,33,370,man);
 umbrella5 = new Ground(700,600,33,370,man);
 umbrella6 = new Ground(0,600,33,370,man);
 umbrella7 = new Ground(100,600,33,370,man);
 umbrella8 = new Ground(200,600,33,370,man);
 mans = createSprite(0,650,500,380);
 mans.addImage(man);
 mans.scale = 0.4;
 mans2 = createSprite(100,650,500,380);
 mans2.addImage(man2);
 mans2.scale = 0.4;
 mans3 = createSprite(200,650,500,380);
 mans3.addImage(man3);
 mans3.scale = 0.4;
 mans4 = createSprite(300,650,500,380);
 mans4.addImage(man4);
 mans4.scale = 0.4;
 mans5 = createSprite(400,650,500,380);
 mans5.addImage(man);
 mans5.scale = 0.4;
 mans6 = createSprite(500,650,500,380);
 mans6.addImage(man2);
 mans6.scale = 0.4;
 mans7 = createSprite(600,650,500,380);
 mans7.addImage(man3);
 mans7.scale = 0.4;
 mans8 = createSprite(700,650,500,380);
 mans8.addImage(man4);
 mans8.scale = 0.4;

for(i =0;i < 100;i++){
	dropG[i] = new Parent(random(0,780),random(-1000,100),10,10);

}
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 
//  ground.show();
imageMode(CENTER)


randomiser1 = random(1,3);
 if (car.x > 790){
	car.x = -120
 };
 if (car3.x < 0){
	car3.x = 790 
 }
 umbrella8.body.position.x =  umbrella8.body.position.x + 20;
car.x = car.x + 5;
car3.x =  car3.x - 5;
umbrella.show();
if (frameCount % 100 === 0){
	thunder = createSprite(random(100,800),random(100,300),10,10);
	thunder.addImage(light);
	clouds = createSprite(thunder.x,thunder.y - 140,50,50);
	clouds.addImage(cloud)
	readFrame = frameCount;
	thunder.scale = 0.8;
	cloud.scale = random(0.2,0.4);
	thunderS.play();
}
if (frameCount - readFrame === 50){
	thunder.visible = 0;
	clouds.visible = 0;
	thunderS.stop();
}

dropG.forEach(element => {
	element.show();
	element.move();
});
 
  drawSprites();
 
}


