 class Ball {
    constructor(x,y,w,h,vx,vy){
    this.y = y;
    this.x = x;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;    
  }


  drawBall(){   
    fill ('blue')
    ellipse(this.x,this.y,this.width,this.height)
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x <= 0 || this.x >= 500){
        this.vx = -this.vx
    }

    if(this.y <= 0 || this.y >= 400){
      this.vy = -this.vy
    }
  
  }
}

function setup() {
	createCanvas(500, 400); 

  ball1 = new Ball(10,10,30,30,5,5);
  ball2 = new Ball(10,10,30,30,6,10);
  ball3 = new Ball(10,10,30,30,7,15);
  ball4 = new Ball(10,10,30,30,8,20);
  ball5 = new Ball(10,10,30,30,9,25);
  ball6 = new Ball(10,10,30,30,10,35);
  ball7 = new Ball(10,10,30,30,11,40);
  ball8 = new Ball(10,10,30,30,12,45);
  ball9 = new Ball(10,10,30,30,13,50);
  ball10 = new Ball(10,10,30,30,14,55);
  ball11 = new Ball(10,10,30,30,15,60);
  ball12 = new Ball(10,10,30,30,16,65);
  ball13 = new Ball(10,10,30,30,17,70);
  ball14 = new Ball(10,10,30,30,18,75);
  ball15 = new Ball(10,10,30,30,19,80);
  ball16 = new Ball(10,10,30,30,20,85);
  ball17 = new Ball(10,10,30,30,21,90);
  ball18 = new Ball(10,10,30,30,22,95);
  ball19 = new Ball(10,10,30,30,23,100);
  ball20 = new Ball(10,10,30,30,24,105);
   ball21 = new Ball(10,10,30,30,25,110);

}

function draw() {
	background('purple');  
  
  ball1.drawBall(); 
  ball2.drawBall(); 
  ball3.drawBall();
  ball4.drawBall();
  ball5.drawBall();
  ball6.drawBall();
  ball7.drawBall();
  ball8.drawBall();
  ball9.drawBall();
  ball10.drawBall();
  ball11.drawBall();
  ball12.drawBall();
  ball13.drawBall();
  ball14.drawBall();
  ball15.drawBall();
  ball16.drawBall();
  ball17.drawBall();
  ball18.drawBall();
  ball19.drawBall();
  ball20.drawBall();
  ball21.drawBall();
  
}
