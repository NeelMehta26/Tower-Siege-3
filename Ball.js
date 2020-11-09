class Ball{
    constructor(x, y, r){
        var options = {
            'restitution': 0.8,
            'friction': 1,
            'density': 1.7
        }

        this.body = Bodies.circle(x, y, r, options);
        this.diameter = 2*r;
        World.add(world, this.body);
    }

    display(){
        push ();
        var pos = this.body.position;
        strokeWeight(3);
        stroke (10, 71, 170);
        fill (136, 204, 252);
        circle(pos.x, pos.y, this.diameter);
        pop ();
    }
}