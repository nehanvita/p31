class Divisions{
    constructor(x,y,w,h){
       var options ={
           isStatic : true
       }
       this.body=Bodies.rectangle(x,y,w,h,options);
       this.w = w;
       this.h = h;

    }

display(){
var divisonpos = this.body.position;
rectMode(CENTER)
fill("white")
rect(divisonpos.x,divisonpos.y,this.w,this.h);

}

}
