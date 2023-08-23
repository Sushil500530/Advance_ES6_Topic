class Vehicle{
    constructor(name,price){
        this.name = name ;
        this.price = price ;
    }
    move(){
        console.log('gari chole na,chole na re gari chole na!')
    }
}
const motor = new Vehicle('Motor','250000') ;
console.log(motor)
class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price); // super mane tar upper lavel er kono akta(mane Vechicle class ta)
        this.seat = seat ;
        this.ticketPrice = ticketPrice ;
    }

}
const bus = new Bus('Bus','5858255','50', '10') ;
console.log(bus)
class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price) ;
        this.load = load ;
    }
    
}
const truck = new Truck('bro Truck', '585854','582 ton') ;
console.log(truck)