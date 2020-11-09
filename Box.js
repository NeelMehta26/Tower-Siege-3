class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 5){
        push ();
        var pos =this.body.position;
        translate(pos.x, pos.y);
        rotate (this.body.angle);
        rect(0, 0, this.width, this.height);
        rectMode(CENTER);
        fill(255, 191, 202);
        pop();
      }
      else{
        push ();
        World.remove(world, this.body);
        var pos = this.body.position;
        this.visibility = this.visibility - 5;  
        tint(255, this.visibility);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }

    score(){
      if(this.visibility <= 0 && this.visibility > -105){
        score++
      }
    }
  }