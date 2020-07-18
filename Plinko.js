class Plinko{
constructor(x,y,d){
var options = {

    isStatic: true
}
this.r = 10;
this.body = Bodies.circle(x,y,this.r,options);
this.d = d;
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    fill("orange");
    circle(pos.x,pos.y,this.d);
}

};