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
}
