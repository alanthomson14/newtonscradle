class Chain{
    constructor (bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.0443
    
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }