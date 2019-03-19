// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get getCount(){
        return this.sides.length
    }

    get perimeter(){
        let sum = 0
        this.sides.forEach(side =>{
            sum += side
        })
        return sum
    }   
}

class Triangle extends Polygon {
    
    get isValid() {
        const sides = this.sides
        if (sides[0] === sides[1] && sides[0] === sides[2]){
            return true
        }else if (sides[0] < (sides[1] + sides[2])){
            return true
        }else {
            return false
        }
    }

    get count(){
       return this.getCount
    }
}

class Square extends Polygon{

    get area(){
        return this.sides[0] ** 2
    }

    get count(){
        return this.getCount
    }

    get isValid(){
        let isequal = true
        
        this.sides.forEach((x)=>{
            if(this.sides[0] !== x ){
                isequal = false
            }
        })
        return isequal
    }
}