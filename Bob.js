class Bob {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution : 0.3,
            density : 0.5,
            friction: 0.1
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        fill("red");
        stroke("black");
        ellipse(0, 0, this.r, this.r);
        pop();

        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(20,10,1,1);
        // pop();
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(20,-10,1,1);
        // pop();        
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(-20,-10,1,1);
        // pop();      
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(0,-20,1,1);
        // pop();   
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(0,20,1,1);
        // pop();   
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(-20,10,1,1);
        // pop(); 
        



    }

}