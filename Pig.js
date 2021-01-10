class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){

    fill('darkblue');
    textFont('MV BOLI')

    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }

  if (score===200) {
fill('darkblue');
  textFont('MV BOLI')

    text('YOU LOST,click restart button to restart',width/2,height/2)
  }

  else if(score===400){
    text('YOU WON,click restart button to restart',width/2,height/2)

  }

  }



};