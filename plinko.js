class Plinko{

construtor(x,y,r){

var options ={
    restititution : 2,
    density : 3,
    friction : 3
}
this.body= Bodies.rectangle(x,y,r,options)
this.r =r;

}

display(){
var plinkopos =this.body.position;

rectMode(CENTER)
fill ("white")
rect(plinkopos.x,plinkopos.y,this.r)

}

}

  