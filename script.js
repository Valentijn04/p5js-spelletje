var x, y, v;

function setup() {
	createCanvas(500, 400);

  xr = 0;
  yr = 200;
  xe = 0;
  ye = 200;
  vxe = 10;
  vye = 20;
  vxr = 30;
  vyr = 40;

}

function draw() {
	background('purple');
  
  rect(xr,yr,50,50);
  fill ('red')
  xr = xr + vxr;
  yr = yr + vyr;

   if(xr <= 0 || xr >= 500){
    vxr = -vxr
  }

  if(yr <= 0 || yr >= 400){
    vyr = -vyr
  }

  ellipse(xe,ye,50,50)
  fill ('blue')
  xe = xe + vxe;
  ye = ye + vye;

 if(xe <= 0 || xe >= 500){
    vxe = -vxe
  }

  if(ye <= 0 || ye >= 400){
    vye = -vye
  }

  
  

 
}
